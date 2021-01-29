import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInstagramComponent } from './preview-instagram.component';

describe('PreviewInstagramComponent', () => {
  let component: PreviewInstagramComponent;
  let fixture: ComponentFixture<PreviewInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
