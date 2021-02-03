import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { DateConfig, TimeConfig } from 'src/app/shared/utils/date-picker-config';

@Component({
  selector: 'app-field-date-time',
  templateUrl: './field-date-time.component.html',
  styleUrls: ['./field-date-time.component.scss']
})

export class FieldDateTimeComponent implements OnInit {
  public postDateConfig = DateConfig;
  public postTimeConfig = TimeConfig;
  public selectedDate: moment.Moment;
  public selectedTime: moment.Moment;
  @Input() initialVal?: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.checkInitialVal();
  }

  public getSelectedDate(res: any): void {
    this.selectedDate = res.date;
    this.onSelect.emit(this.formatDateTime(this.selectedDate, this.selectedTime));
  }

  public getSelectedTime(res: any): void {
    this.selectedTime = res.date;
    this.onSelect.emit(this.formatDateTime(this.selectedDate, this.selectedTime));
  }

  private formatDateTime(date: moment.Moment, time: any): string {
    let selectedDate = date ? date.format('MM/DD/YYYY') : moment().format('MM/DD/YYYY');
    let selectedTime = time ? time.format('HH:mm') : moment().format('HH:mm');

    return moment(`${selectedDate} ${selectedTime}`).toISOString();
  }

  private checkInitialVal(): void {
    if(!this.initialVal)
      return;

    this.selectedDate = moment(this.initialVal);
    this.selectedTime = moment(this.initialVal);
  }
}
