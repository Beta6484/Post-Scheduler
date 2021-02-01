import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'app-post-preview-modal',
  templateUrl: './post-preview-modal.component.html',
  styleUrls: ['./post-preview-modal.component.scss']
})
export class PostPreviewModalComponent implements OnInit {
  public socialData$: BehaviorSubject<Schedule> = new BehaviorSubject<any>({});
  public showModal: boolean = false;
  @Input() socialData: Schedule;

  ngOnInit(): void {
    this.socialData$.next(this.socialData);
  }
}
