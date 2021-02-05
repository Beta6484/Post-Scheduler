import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-field-image-upload',
  templateUrl: './field-image-upload.component.html',
  styleUrls: ['./field-image-upload.component.scss']
})

export class FieldImageUploadComponent implements OnInit {
  public hasDraft: boolean = false;
  @Input() socialData$: BehaviorSubject<Schedule>;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.checkDraft();
  }

  public getSelectedFile(res): void {
    this.onSelect.emit(res);
  }

  private checkDraft(): void {
    this.socialData$.pipe(take(2)).subscribe(res => {
      if(Object.keys(res).length > 0 && res.media !== '') {
        this.hasDraft = true;
      }
    });
  }
}
