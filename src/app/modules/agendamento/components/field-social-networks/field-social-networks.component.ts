import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Schedule, SocialNetworks } from 'src/app/shared/models';
import { SocialNetworksService } from 'src/app/shared/services/social-networks';

@Component({
  selector: 'app-field-social-networks',
  templateUrl: './field-social-networks.component.html',
  styleUrls: ['./field-social-networks.component.scss']
})

export class FieldSocialNetworksComponent implements OnInit {
  public socialNetworks: SocialNetworks[];
  private selectedSocialNetworks: number[] = [];
  @Input() socialData$: BehaviorSubject<Schedule>;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(
    private socialNetworksService: SocialNetworksService
  ) {}

  ngOnInit(): void {
    this.socialNetworksService.getAll().pipe(
      take(1),
      map(res => {
        res.forEach(el => el.checked = false);
        return res;
      })
    ).subscribe(res => this.socialNetworks = res);

    this.checkDraft();
  }

  public getSelected(res: boolean, id: number): void {
    if(res && !this.selectedSocialNetworks.includes(id)) {
      this.selectedSocialNetworks.push(id);
    } else {
      this.selectedSocialNetworks.splice(this.selectedSocialNetworks.indexOf(id), 1)
    }

    this.onSelect.emit(this.selectedSocialNetworks);
  }

  private checkDraft(): void {
    this.socialData$.pipe(take(2)).subscribe(res => {
      if(Object.keys(res).length > 0) {
        this.selectedSocialNetworks = res.social_network_key;

        this.socialNetworks.forEach(item => {
          if(res.social_network_key.includes(item.id)) {
            item.checked = true;
          }
        });
      }
    });
  }
}
