import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})

export class PostPreviewComponent implements OnInit {
  public showSocial: boolean = false;
  @Input() socialData$: BehaviorSubject<Schedule>;

  ngOnInit(): void {
    this.socialData$.subscribe(res => res.social_network_key && res.social_network_key.length > 0 ? this.showSocial = true : this.showSocial = false);
  }

  public toggleSocial() {
    this.showSocial = !this.showSocial;
  }
}
