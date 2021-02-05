import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPostPreviewComponent } from './field-post-preview.component';

describe('FieldPostPreviewComponent', () => {
  let component: FieldPostPreviewComponent;
  let fixture: ComponentFixture<FieldPostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldPostPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
