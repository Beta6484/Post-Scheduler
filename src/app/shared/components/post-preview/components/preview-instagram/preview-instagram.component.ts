import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-preview-instagram',
  templateUrl: './preview-instagram.component.html',
  styleUrls: ['./preview-instagram.component.scss']
})

export class PreviewInstagramComponent {
  @Input() socialData$: BehaviorSubject<Schedule>;
}
