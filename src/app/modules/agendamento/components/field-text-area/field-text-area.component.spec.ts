import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextAreaComponent } from './field-text-area.component';

describe('FieldTextAreaComponent', () => {
  let component: FieldTextAreaComponent;
  let fixture: ComponentFixture<FieldTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
