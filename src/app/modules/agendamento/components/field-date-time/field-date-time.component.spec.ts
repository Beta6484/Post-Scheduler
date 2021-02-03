import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDateTimeComponent } from './field-date-time.component';

describe('FieldDateTimeComponent', () => {
  let component: FieldDateTimeComponent;
  let fixture: ComponentFixture<FieldDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
