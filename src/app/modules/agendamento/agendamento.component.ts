import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
  providers: [DatePipe]
})

export class AgendamentoComponent implements OnInit {
  public scheduleForm: FormGroup;
  public socialNetworks$: Observable<any>;
  public selectedSocialNetworks: number[] = [];
  public selectedPostDate: string;
  public selectedPostTime: string;
  public selectedMedia: any[] = [];
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

  constructor(
    private title: Title,
    private dbService: NgxIndexedDBService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Painel de Agendamento de Posts - mLabs');
    this.selectedPostDate = this.datePipe.transform(this.today, 'mediumDate');
    this.selectedPostTime = '00:00:00';
    this.postDateConfig.min = this.datePipe.transform(this.today, 'dd-MM-yyy');
    this.socialNetworks$ = this.dbService.getAll('social-networks');

    this.scheduleForm = this.formBuilder.group({
      socialNetworkKey: [this.selectedSocialNetworks],
      publicationDate: [''],
      text: [''],
      media: [''],
      statusKey: ['1']
    })
  }

  get f() {
    return this.scheduleForm.controls;
  }

  public checkboxChanged(res: boolean, id: number) {
    if(res === true) {
      if(this.selectedSocialNetworks.includes(id)) {
        return;
      } else {
        this.selectedSocialNetworks.push(id)
      }
    } else {
      if(this.selectedSocialNetworks.includes(id)) {
        const index = this.selectedSocialNetworks.indexOf(id);

        this.selectedSocialNetworks.splice(index, 1);
      } else {
        return;
      }
    }
  }

  public datePickerChanged(res): void {
    this.selectedPostDate = this.datePipe.transform(res.date, 'mediumDate');
  }

  public timePickerChanged(res): void {
    this.selectedPostTime = this.datePipe.transform(res.date, 'HH:mm:ss');
  }

  public emojiSelected(res)  {
    this.scheduleForm.controls['text'].patchValue(this.scheduleForm.controls['text'].value + res);
  }

  public onSubmit() {
    this.scheduleForm.controls['publicationDate'].patchValue(new Date(this.selectedPostDate + ', ' + this.selectedPostTime).toISOString());
    // this.scheduleForm.patchValue({publicationDate: new Date(this.selectedPostDate + ', ' + this.selectedPostTime).toISOString()});
    console.log(this.scheduleForm.value)
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
