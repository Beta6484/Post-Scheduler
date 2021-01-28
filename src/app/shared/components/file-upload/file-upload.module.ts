import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropDirective } from '../../directives/dragdrop.directive';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    DragDropDirective
  ],
  exports: [
    FileUploadComponent
  ]
})

export class FileUploadModule {}
