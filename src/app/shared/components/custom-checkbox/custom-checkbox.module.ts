import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCheckboxComponent } from './custom-checkbox.component';

@NgModule({
  declarations: [
    CustomCheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCheckboxComponent
  ],
})

export class CustomCheckboxModule {}
