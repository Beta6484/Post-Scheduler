import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLinkedinComponent } from './preview-linkedin.component';

describe('PreviewLinkedinComponent', () => {
  let component: PreviewLinkedinComponent;
  let fixture: ComponentFixture<PreviewLinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewLinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
