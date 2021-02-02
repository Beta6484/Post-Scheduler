import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialNetworks } from '../../models';

@Injectable({
  providedIn: 'root'
})

export class SocialNetworksService {
  constructor(
    private dbService: NgxIndexedDBService
  ) {}

  public getAll(): Observable<SocialNetworks[]> {
    return this.dbService.getAll('social-networks');
  }

  public post(data: SocialNetworks): Observable<number> {
    return this.dbService.add('social-networks', data);
  }

  public update(data: SocialNetworks, key: number): Observable<any[]> {
    return this.dbService.update('social-networks', data, key);
  }

  public delete(key: number): Observable<any[]> {
    return this.dbService.delete('social-networks', key);
  }

  public clear(): Observable<boolean> {
    return this.dbService.clear('social-networks');
  }

  public isEmpty(): Observable<boolean> {
    return this.dbService.count('social-networks').pipe(
      map(res => res === 0)
    );
  }
}
