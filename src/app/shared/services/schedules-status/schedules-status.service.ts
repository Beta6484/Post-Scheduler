import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchedulesStatus } from '../../models/schedules-status';

@Injectable({
  providedIn: 'root'
})

export class SchedulesStatusService {
  constructor(
    private dbService: NgxIndexedDBService
  ) {}

  public getAll(): Observable<SchedulesStatus[]> {
    return this.dbService.getAll('schedules-status');
  }

  public post(data: SchedulesStatus): Observable<number> {
    return this.dbService.add('schedules-status', data);
  }

  public update(data: SchedulesStatus, key: number): Observable<any[]> {
    return this.dbService.update('schedules-status', data, key);
  }

  public delete(key: number): Observable<any[]> {
    return this.dbService.delete('schedules-status', key);
  }

  public clear(): Observable<boolean> {
    return this.dbService.clear('schedules-status');
  }

  public isEmpty(): Observable<boolean> {
    return this.dbService.count('schedules-status').pipe(
      map(res => res === 0)
    );
  }
}
