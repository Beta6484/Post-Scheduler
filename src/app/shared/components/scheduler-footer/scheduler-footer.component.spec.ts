import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerFooterComponent } from './scheduler-footer.component';

describe('SchedulerFooterComponent', () => {
  let component: SchedulerFooterComponent;
  let fixture: ComponentFixture<SchedulerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
