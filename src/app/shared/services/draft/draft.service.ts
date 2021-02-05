import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from '../../models';

@Injectable({
  providedIn: 'root'
})

export class DraftService {
  constructor(
    private dbService: NgxIndexedDBService
  ) {}

  public getAll(): Observable<Schedule[]> {
    return this.dbService.getAll('drafts');
  }

  public post(data: Schedule): Observable<number> {
    return this.dbService.add('drafts', data);
  }

  public update(data: Schedule): Observable<any[]> {
    return this.dbService.update('drafts', data);
  }

  public delete(key: number): Observable<any[]> {
    return this.dbService.delete('drafts', key);
  }

  public clear(): Observable<boolean> {
    return this.dbService.clear('drafts');
  }

  public isEmpty(): Observable<boolean> {
    return this.dbService.count('drafts').pipe(
      map(res => res === 0)
    );
  }
}
