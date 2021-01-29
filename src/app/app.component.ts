import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(
    private dbService: NgxIndexedDBService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.storeInitialSchedules();
    this.storeInitialSchedulesStatus();
    this.storeInitialSocialNetworks();
  }

  private storeInitialSchedulesStatus() {
    this.dbService.getAll('schedules-status').subscribe(res => {
      if(res.length === 0) {
        this.httpClient.get("assets/data/schedules-status.json").subscribe(res => {
          let data = res['data'];
          data.forEach(el => {
            this.dbService.add('schedules-status', {
              name: el.name,
              color: el.color
            })
          });
        });
      } else {
        return;
      }
    });
  }

  private storeInitialSchedules() {
    this.dbService.getAll('schedules').subscribe(res => {
      if(res.length === 0) {
        this.httpClient.get("assets/data/schedules.json").subscribe(res => {
          let data = res['data'];
          data.forEach(el => {
            this.dbService.add('schedules', {
              social_network_key: el.social_network_key,
              media: el.media,
              text: el.text,
              publication_date: el.publication_date,
              status_key: el.status_key
            })
          });
        });
      } else {
        return;
      }
    });
  }

  private storeInitialSocialNetworks() {
    this.dbService.getAll('social-networks').subscribe(res => {
      if(res.length === 0) {
        this.httpClient.get("assets/data/social-networks.json").subscribe(res => {
          let data = res['data'];
          data.forEach(el => {
            this.dbService.add('social-networks', {
              name: el.name,
              icon: el.icon,
              status: el.status,
              color: el.color
            })
          });
        });
      } else {
        return;
      }
    });
  }
}
