import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewModalComponent } from './post-preview-modal.component';

describe('PostPreviewModalComponent', () => {
  let component: PostPreviewModalComponent;
  let fixture: ComponentFixture<PostPreviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
