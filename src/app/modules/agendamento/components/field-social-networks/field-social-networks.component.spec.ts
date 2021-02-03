import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSocialNetworksComponent } from './field-social-networks.component';

describe('FieldSocialNetworksComponent', () => {
  let component: FieldSocialNetworksComponent;
  let fixture: ComponentFixture<FieldSocialNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSocialNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
