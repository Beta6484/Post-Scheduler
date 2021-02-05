import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldImageUploadComponent } from './field-image-upload.component';

describe('FieldImageUploadComponent', () => {
  let component: FieldImageUploadComponent;
  let fixture: ComponentFixture<FieldImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
