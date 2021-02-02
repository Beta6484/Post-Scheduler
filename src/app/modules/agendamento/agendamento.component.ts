import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/services/modal.service';
import { Schedule } from 'src/app/shared/models/schedule';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
  providers: [DatePipe]
})

export class AgendamentoComponent implements OnInit {
  public scheduleForm: FormGroup;
  public socialNetworks$: Observable<any>;
  public socialData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public selectedSocialNetworks: number[] = [];
  public selectedPostDate: string;
  public selectedPostTime: string;
  public selectedMedia: string | ArrayBuffer;
  public today = new Date();
  public showPostVisualization: boolean = true;
  public imageFromDraft: boolean = false;
  public postDateConfig = {
    locale: 'pt-br',
    format: 'DD/MM/YYYY',
    closeOnSelect: true,
    allowMultiSelect: false,
    min: ''
  };
  public postTimeConfig = {
    locale: 'pt-br',
    format: 'HH:mm',
    closeOnSelect: true,
    allowMultiSelect: false,
    showTwentyFourHours: true,
    disableKeypress: false
  };

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile();
    this.showPostVisualization = !this.isMobile();
  }

  constructor(
    private title: Title,
    private router: Router,
    private dbService: NgxIndexedDBService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private modalService: ModalService
  ) {
    this.title.setTitle('Painel de Agendamento de Posts - mLabs');
  }

  ngOnInit(): void {
    this.postDateConfig.min = this.datePipe.transform(this.today, 'dd-MM-yyy');
    this.socialNetworks$ = this.dbService.getAll('social-networks');
    this.showPostVisualization = !this.isMobile();

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
    console.log(this.scheduleForm)
  }

  public checkboxChanged(res: boolean, id: number) {
    if(res === true) {
      if(this.selectedSocialNetworks.includes(id)) {
        return;
      } else {
        this.selectedSocialNetworks.push(id);
        this.scheduleForm.controls['social_network_key'].patchValue(this.selectedSocialNetworks);
      }
    } else {
      if(this.selectedSocialNetworks.includes(id)) {
        const index = this.selectedSocialNetworks.indexOf(id);
        this.selectedSocialNetworks.splice(index, 1);
        this.scheduleForm.controls['social_network_key'].patchValue(this.selectedSocialNetworks);
      } else {
        return;
      }
    }
  }

  public datePickerChanged(res): void {
    console.log(res);
    this.selectedPostDate = res.date;
    this.scheduleForm.controls['publication_date'].patchValue(this.formatDateTime(this.selectedPostDate, this.selectedPostTime));
  }

  public timePickerChanged(res): void {
    this.selectedPostTime = res.date;
    this.scheduleForm.controls['publication_date'].patchValue(this.formatDateTime(this.selectedPostDate, this.selectedPostTime));
  }

  public emojiSelected(res): void  {
    this.scheduleForm.controls['text'].patchValue(this.scheduleForm.controls['text'].value + res);
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

  public isNullOrEmpty(value: string):boolean {
    return (value == null || value.length == 0);
  }

  public togglePostVisualization(): void {
    this.showPostVisualization = !this.showPostVisualization;
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

  private formatDateTime(date, time) {
    let selectedDate = date ? this.datePipe.transform(date, 'mediumDate') : this.datePipe.transform(this.today, 'mediumDate');
    let selectedTime = time ? this.datePipe.transform(time, 'HH:mm:ss') : '00:00:00';

    return new Date(`${selectedDate}, ${selectedTime}`).toISOString();
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
