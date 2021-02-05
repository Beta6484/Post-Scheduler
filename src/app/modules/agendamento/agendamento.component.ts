import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal';
import { Schedule } from 'src/app/shared/models';
import { DateConfig, TimeConfig } from 'src/app/shared/utils/date-picker-config';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})

export class AgendamentoComponent implements OnInit {
  public scheduleForm: FormGroup;
  public socialData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public selectedSocialNetworks: number[] = [];
  public selectedPostDate: string;
  public selectedPostTime: string;
  public selectedMedia: string | ArrayBuffer;
  public today = new Date();
  public imageFromDraft: boolean = false;
  public postDateConfig = DateConfig;
  public postTimeConfig = TimeConfig;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile();
  }

  constructor(
    private title: Title,
    private router: Router,
    private dbService: NgxIndexedDBService,
    private formBuilder: FormBuilder,
    private modalService: ModalService
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



  public onfileUpload(res): void {
    this.selectedMedia = res;
    this.scheduleForm.controls['media'].patchValue(this.selectedMedia);
  }

  public onFormChange(): void {
    this.scheduleForm.valueChanges.subscribe((res: Schedule) => this.socialData$.next(res));
  }

  public onSubmit(): void {
    this.dbService.add('schedules', this.scheduleForm.value);

    this.openModal('sucessModal');
  }

  public onSaveDraft(): void {
    this.dbService.getAll('drafts').subscribe(res => {
      if(res.length === 0) {
        this.dbService.add('drafts', this.scheduleForm.value);
      } else {
        this.scheduleForm.value.id = res[0].id;
        this.dbService.update('drafts', this.scheduleForm.value);
      }
    });

    this.openModal('draftModal');
  }

  public isMobile():boolean {
    return window.innerWidth < 992;
  }

  public goToHome(): void {
    this.dbService.getAll('drafts').subscribe((res: Schedule[]) => {
      if(res.length > 0) {
        this.dbService.clear('drafts')
      }
    });

    this.router.navigate(['home']);
  }

  public goToList(): void {
    this.router.navigate(['lista']);
  }

  public openModal(id): void {
    this.modalService.open(id);
  }

  public closeModal(id): void {
    this.modalService.close(id);
  }

  private checkDraft():void {
    this.dbService.getAll('drafts').subscribe((res: Schedule[]) => {
      if(res.length === 0) {
        return;
      } else {
        this.selectedSocialNetworks = res[0].social_network_key;
        this.selectedPostDate = res[0].publication_date;
        this.selectedPostTime = res[0].publication_date;
        this.imageFromDraft = true;

        this.scheduleForm.patchValue({
          media: res[0].media,
          publication_date: res[0].publication_date,
          social_network_key: res[0].social_network_key,
          status_key: res[0].status_key,
          text: res[0].text
        });
      }
    });
  }
}
