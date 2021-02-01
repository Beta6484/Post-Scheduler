import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from 'src/app/shared/models/schedule';
import { SchedulesStatus } from 'src/app/shared/models/schedules-status';
import { SocialNetworks } from 'src/app/shared/models/social-networks';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public schedulesList$: any;
  private schedules$: Observable<Schedule[]>;
  private schedulesStatus$: Observable<SchedulesStatus[]>;
  private socialNetworks$: Observable<SocialNetworks[]>;

  constructor(
    private title: Title,
    private dbService: NgxIndexedDBService
  ) {
    this.title.setTitle('Lista de Posts Agendados - mLabs');
  }

  ngOnInit(): void {
    this.schedules$ = this.dbService.getAll('schedules');
    this.schedulesStatus$ = this.dbService.getAll('schedules-status');
    this.socialNetworks$ = this.dbService.getAll('social-networks');

    this.schedulesList$ = forkJoin([this.schedules$, this.schedulesStatus$, this.socialNetworks$]).pipe(
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
        })

        return schedulesList;
      })
    )
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
