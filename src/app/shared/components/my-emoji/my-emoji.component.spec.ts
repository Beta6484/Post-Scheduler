import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmojiComponent } from './my-emoji.component';

describe('MyEmojiComponent', () => {
  let component: MyEmojiComponent;
  let fixture: ComponentFixture<MyEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
