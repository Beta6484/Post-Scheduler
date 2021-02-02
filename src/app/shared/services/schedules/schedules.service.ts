import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from '../../models/schedule';

@Injectable({
  providedIn: 'root'
})

export class SchedulesService {
  constructor(
    private dbService: NgxIndexedDBService
  ) {}

  public getAll(): Observable<Schedule[]> {
    return this.dbService.getAll('schedules');
  }

  public post(data: Schedule): Observable<number> {
    return this.dbService.add('schedules', data);
  }

  public update(data: Schedule, key: number): Observable<any[]> {
    return this.dbService.update('schedules', data, key);
  }

  public delete(key: number): Observable<any[]> {
    return this.dbService.delete('schedules', key);
  }

  public clear(): Observable<boolean> {
    return this.dbService.clear('schedules');
  }

  public isEmpty(): Observable<boolean> {
    return this.dbService.count('schedules').pipe(
      map(res => res === 0)
    );
  }
}
