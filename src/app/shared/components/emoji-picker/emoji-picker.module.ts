import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ClickOutsideModule } from 'ng-click-outside';
import { EmojiPickerComponent } from './emoji-picker.component';

@NgModule({
  declarations: [
    EmojiPickerComponent
  ],
  imports: [
    CommonModule,
    PickerModule,
    ClickOutsideModule
  ],
  exports: [
    EmojiPickerComponent
  ]
})

export class EmojiPickerModule {}
