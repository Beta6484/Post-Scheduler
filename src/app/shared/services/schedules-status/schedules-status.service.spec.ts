import { TestBed } from '@angular/core/testing';

import { SchedulesStatusService } from './schedules-status.service';

describe('SchedulesStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedulesStatusService = TestBed.get(SchedulesStatusService);
    expect(service).toBeTruthy();
  });
});
