import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Schedule, SchedulesStatus, SocialNetworks } from '../../models';
import { SchedulesService } from '../schedules';
import { SchedulesStatusService } from '../schedules-status';
import { SocialNetworksService } from '../social-networks';

@Injectable({
  providedIn: 'root'
})

export class MockDataService {
  constructor(
    private httpClient: HttpClient,
    private schedulesService: SchedulesService,
    private schedulesStatusService: SchedulesStatusService,
    private socialNetworksService: SocialNetworksService
  ) {}

  public storeInitialData(): void {
    this.storeInitialSchedules();
    this.storeInitialSchedulesStatus();
    this.storeInitialSocialNetworks();
  }

  private storeInitialSchedules(): void {
    this.schedulesService.isEmpty().pipe(take(1)).subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/schedules.json').pipe(take(1)).subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: Schedule) => {
          this.schedulesService.post({
            id: item.id,
            social_network_key: item.social_network_key,
            media: item.media,
            text: item.text,
            publication_date: item.publication_date,
            status_key: item.status_key
          });
        });
      });
    });
  }

  private storeInitialSchedulesStatus(): void {
    this.schedulesStatusService.isEmpty().pipe(take(1)).subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/schedules-status.json').pipe(take(1)).subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: SchedulesStatus) => {
          this.schedulesStatusService.post({
            id: item.id,
            name: item.name,
            color: item.color
          });
        });
      });
    });
  }

  private storeInitialSocialNetworks(): void {
    this.socialNetworksService.isEmpty().pipe(take(1)).subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/social-networks.json').pipe(take(1)).subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: SocialNetworks) => {
          this.socialNetworksService.post({
            id: item.id,
            name: item.name,
            icon: item.icon,
            status: item.status,
            color: item.color
          });
        });
      });
    });
  }
}
