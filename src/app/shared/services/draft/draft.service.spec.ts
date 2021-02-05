import { TestBed } from '@angular/core/testing';

import { DraftService } from './draft.service';

describe('DraftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DraftService = TestBed.get(DraftService);
    expect(service).toBeTruthy();
  });
});
