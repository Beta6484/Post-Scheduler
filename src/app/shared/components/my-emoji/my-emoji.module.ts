import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyEmojiComponent } from './my-emoji.component';

@NgModule({
  declarations: [
    MyEmojiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyEmojiComponent
  ]
})

export class MyEmojiModule {}
