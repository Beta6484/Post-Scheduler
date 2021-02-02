import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule, SchedulesStatus, SocialNetworks } from '../../models';
import { SchedulesStatusService } from '../schedules-status/schedules-status.service';
import { SchedulesService } from '../schedules/schedules.service';
import { SocialNetworksService } from '../social-networks/social-networks.service';

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
    this.schedulesService.isEmpty().subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/schedules.json').subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: Schedule) => {
          this.schedulesService.post({
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
    this.schedulesStatusService.isEmpty().subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/schedules-status.json').subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: SchedulesStatus) => {
          this.schedulesStatusService.post({
            name: item.name,
            color: item.color
          });
        });
      });
    });
  }

  private storeInitialSocialNetworks(): void {
    this.socialNetworksService.isEmpty().subscribe(res => {
      if(!res)
        return;

      this.httpClient.get('assets/data/social-networks.json').subscribe(res => {
        let data: [] = res['data'];
        data.forEach((item: SocialNetworks) => {
          this.socialNetworksService.post({
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
