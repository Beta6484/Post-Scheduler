import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, Observable } from 'rxjs';

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
  public postDateConfig = {
    locale: 'pt-br',
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
  }

  constructor(
    private title: Title,
    private dbService: NgxIndexedDBService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Painel de Agendamento de Posts - mLabs');
    this.postDateConfig.min = this.datePipe.transform(this.today, 'dd-MM-yyy');
    this.socialNetworks$ = this.dbService.getAll('social-networks');

    this.scheduleForm = this.formBuilder.group({
      social_network_key: [''],
      publication_date: [''],
      text: [''],
      media: [''],
      status_key: ['1']
    });

    this.onFormChange();
    this.isMobile();
  }

  get f() {
    return this.scheduleForm.controls;
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
    this.selectedPostDate = res.date;
    this.scheduleForm.controls['publication_date'].patchValue(this.formatDateTime(this.selectedPostDate, this.selectedPostTime));
  }

  public timePickerChanged(res): void {
    this.selectedPostTime = res.date;
    this.scheduleForm.controls['publication_date'].patchValue(this.formatDateTime(this.selectedPostDate, this.selectedPostTime));
  }

  public emojiSelected(res)  {
    this.scheduleForm.controls['text'].patchValue(this.scheduleForm.controls['text'].value + res);
  }

  public onfileUpload(res) {
    this.selectedMedia = res;
    this.scheduleForm.controls['media'].patchValue(this.selectedMedia);
  }

  public onFormChange() {
    this.scheduleForm.valueChanges.subscribe(res => this.socialData$.next(res));
  }

  public onSubmit() {
    console.log(this.scheduleForm.value)
  }

  public trackByFn(index, item) {
    return item.id;
  }

  public isMobile():boolean {
    return window.innerWidth < 992;
  }

  private formatDateTime(date?, time?) {
    let selectedDate = date ? this.datePipe.transform(date, 'mediumDate') : this.datePipe.transform(this.today, 'mediumDate');
    let selectedTime = time ? this.datePipe.transform(time, 'HH:mm:ss') : '00:00:00';

    return new Date(`${selectedDate}, ${selectedTime}`).toISOString();
  }
}
