import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public schedulesList: any[];
  public reverse: boolean = false;
  public order: any = 'id';

  constructor(
    private title: Title,
    private dbService: NgxIndexedDBService
  ) {
    this.title.setTitle('Lista de Posts Agendados - mLabs');
  }

  ngOnInit(): void {
    forkJoin([
      this.dbService.getAll('schedules'),
      this.dbService.getAll('schedules-status'),
      this.dbService.getAll('social-networks')
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
        })

        return schedulesList;
      })
    ).subscribe(res => this.schedulesList = res)
  }

  public setOrder(val) {
    if(this.order == val) {
      this.reverse = !this.reverse;
    }

    this.order = val;
  }
}
