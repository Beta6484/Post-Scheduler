import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialNetworks } from 'src/app/shared/models';
import { SocialNetworksService } from 'src/app/shared/services/social-networks';

@Component({
  selector: 'app-field-social-networks',
  templateUrl: './field-social-networks.component.html',
  styleUrls: ['./field-social-networks.component.scss']
})

export class FieldSocialNetworksComponent implements OnInit {
  public socialNetworks$: Observable<SocialNetworks[]>;
  public socialNetworks: SocialNetworks[];
  private selectedSocialNetworks: number[] = [];
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(
    private socialNetworksService: SocialNetworksService
  ) {}

  ngOnInit(): void {
    this.socialNetworksService.getAll().pipe(
      map(res => {
        res.forEach(el => el.checked = false)
        return res;
      })
    ).subscribe(res => this.socialNetworks = res);
  }

  public getSelected(res: boolean, id: number): void {
    if(res && !this.selectedSocialNetworks.includes(id)) {
      this.selectedSocialNetworks.push(id);
    } else {
      this.selectedSocialNetworks.splice(this.selectedSocialNetworks.indexOf(id), 1)
    }

    this.onSelect.emit(this.selectedSocialNetworks);
  }
}
