import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from 'src/app/shared/models/schedule';

@Component({
  selector: 'app-preview-linkedin',
  templateUrl: './preview-linkedin.component.html',
  styleUrls: ['./preview-linkedin.component.scss']
})

export class PreviewLinkedinComponent {
  public today = new Date();
  @Input() socialData$: BehaviorSubject<Schedule>;
}
