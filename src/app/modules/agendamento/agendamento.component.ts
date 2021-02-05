import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/components/modal';
import { Schedule } from 'src/app/shared/models';
import { DraftService } from 'src/app/shared/services/draft';
import { SchedulesService } from 'src/app/shared/services/schedules';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})

export class AgendamentoComponent implements OnInit {
  public scheduleForm: FormGroup;
  public socialData$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile();
  }

  constructor(
    private title: Title,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private schedulesService: SchedulesService,
    private draftService: DraftService
  ) {
    this.title.setTitle('Painel de Agendamento de Posts - mLabs');
  }

  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      media: ['', Validators.required],
      publication_date: ['', Validators.required],
      social_network_key: ['', Validators.required],
      status_key: [1],
      text: ['', Validators.required]
    });

    this.onFormChange();
    this.isMobile();
    this.checkDraft();
  }

  public getSocialNetworkVal(res: number[]): void {
    this.scheduleForm.controls['social_network_key'].patchValue(res);
  }

  public getDateTimeVal(res: string): void {
    this.scheduleForm.controls['publication_date'].patchValue(res);
  }

  public getTextVal(res: string): void {
    this.scheduleForm.controls['text'].patchValue(res);
  }

  public getFileVal(res: string): void {
    this.scheduleForm.controls['media'].patchValue(res);
  }

  public onFormChange(): void {
    this.scheduleForm.valueChanges.subscribe((res: Schedule) => this.socialData$.next(res));
  }

  public submit(): void {
    this.schedulesService.post(this.scheduleForm.value);
    this.triggerModal('sucessModal', 'open');
    this.clearDraft();
  }

  public save(): void {
    this.draftService.isEmpty().pipe(take(1)).subscribe(res => {
      if(res) {
        this.draftService.post(this.scheduleForm.value);
      } else {
        this.draftService.getAll().pipe(take(1)).subscribe(res => {
          this.scheduleForm.value.id = res[0].id;
          this.draftService.update(this.scheduleForm.value);
        });
      }

      this.triggerModal('draftModal', 'open');
    });
  }

  public cancel(): void {
    if(this.scheduleForm.valid) {
      this.triggerModal('cancelModal', 'open');
    } else {
      this.goTo('home');
    }
  }

  public isMobile():boolean {
    return window.innerWidth < 992;
  }

  public goTo(route: string): void {
    this.router.navigate([route]);
  }

  public triggerModal(id: string, method: string) {
    switch (method) {
      case 'open':
        this.modalService.open(id);
      break;

      case 'close':
        this.modalService.close(id);
      break;
    }
  }

  public clearDraft() {
    this.draftService.isEmpty().pipe(take(1)).subscribe(res => {
      if(res) {
        return;
      } else {
        this.draftService.clear();
      }
    });
  }

  private checkDraft():void {
    this.draftService.isEmpty().pipe(take(1)).subscribe(res => {
      if(res) {
        return;
      } else {
        this.draftService.getAll().pipe(take(1)).subscribe(res => {
          this.scheduleForm.patchValue({
            media: res[0].media,
            publication_date: res[0].publication_date,
            social_network_key: res[0].social_network_key,
            status_key: res[0].status_key,
            text: res[0].text
          });
        });
      }
    });
  }
}
