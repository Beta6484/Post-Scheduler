import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragNDropDirective } from '../../directives/drag-n-drop';
import { ButtonModule } from '../button';
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
