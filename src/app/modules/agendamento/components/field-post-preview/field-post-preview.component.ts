import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-field-post-preview',
  templateUrl: './field-post-preview.component.html',
  styleUrls: ['./field-post-preview.component.scss']
})
export class FieldPostPreviewComponent {
  @Input() socialData$: BehaviorSubject<Schedule>;
}
