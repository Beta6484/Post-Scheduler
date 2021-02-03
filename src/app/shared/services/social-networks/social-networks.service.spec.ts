import { TestBed } from '@angular/core/testing';
import { SocialNetworksService } from './social-networks.service';


describe('SocialNetworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialNetworksService = TestBed.get(SocialNetworksService);
    expect(service).toBeTruthy();
  });
});
