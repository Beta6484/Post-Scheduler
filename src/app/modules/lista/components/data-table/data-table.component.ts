import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule, SchedulesStatus } from 'src/app/shared/models';
import { SchedulesService } from 'src/app/shared/services/schedules';
import { SchedulesStatusService } from 'src/app/shared/services/schedules-status';
import { SocialNetworksService } from 'src/app/shared/services/social-networks';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
  public schedulesList: Schedule[];
  public allSchedulesList: Schedule[];
  public statusList: SchedulesStatus[] = [];
  public reverse: boolean = false;
  public order: string = 'id';
  public activeStatus: number;

  constructor(
    private schedulesService: SchedulesService,
    private schedulesStatusService: SchedulesStatusService,
    private socialNetworksService: SocialNetworksService
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.schedulesService.getAll(),
      this.schedulesStatusService.getAll(),
      this.socialNetworksService.getAll()
    ]).pipe(
      map(([schedules, schedulesStatus, socialNetworks]) => {
        let schedulesList = [];

        schedules.forEach(res => {
          let scheduleItem = {
            id: res.id,
            social_network_key: res.social_network_key,
            socialNetworks: [],
            publication_date: res.publication_date,
            text: res.text,
            media: res.media,
            status_key: res.status_key,
            status: schedulesStatus.find(x => x.id == res.status_key)
          }

          res.social_network_key.forEach(key => {
            scheduleItem.socialNetworks.push(socialNetworks.find(x => x.id == key))
          });

          schedulesList.push(scheduleItem);
          if(this.statusList.indexOf(scheduleItem.status) === -1) {
            this.statusList.push(scheduleItem.status);
          }
        })

        return schedulesList;
      })
    ).subscribe(res => {
      this.schedulesList = res;
      this.allSchedulesList = res;
    });
  }

  public setOrder(val: string): void {
    this.order === val && (this.reverse = !this.reverse);
    this.order = val;
  }

  public filterByStatus(key?: any): void {
    if(key) {
      this.activeStatus = key;
      this.schedulesList = this.allSchedulesList.filter(item => item.status_key === key);
    } else {
      this.activeStatus = undefined;
      this.schedulesList = this.allSchedulesList;
    }
  }
}
