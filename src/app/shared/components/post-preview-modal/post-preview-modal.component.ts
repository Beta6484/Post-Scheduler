import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../../models/schedule';
import { ModalService } from '../modal/services/modal.service';

@Component({
  selector: 'app-post-preview-modal',
  templateUrl: './post-preview-modal.component.html',
  styleUrls: ['./post-preview-modal.component.scss']
})

export class PostPreviewModalComponent implements OnInit {
  public socialData$: BehaviorSubject<Schedule> = new BehaviorSubject<any>({});
  @Input() socialData: Schedule;

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.socialData$.next(this.socialData);
  }

  public openModal(id) {
    this.modalService.open(id);
  }

  public closeModal(id) {
    this.modalService.close(id);
  }
}
