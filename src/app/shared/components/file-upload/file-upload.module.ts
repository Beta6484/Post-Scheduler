import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragNDropDirective } from '../../directives/dragndrop.directive';
import { ButtonModule } from '../button/button.module';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    DragNDropDirective
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    FileUploadComponent
  ]
})

export class FileUploadModule {}
