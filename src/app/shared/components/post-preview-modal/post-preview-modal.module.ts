import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from '../modal';
import { PostPreviewModule } from '../post-preview';
import { PostPreviewModalComponent } from './post-preview-modal.component';

@NgModule({
  declarations: [
    PostPreviewModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    PostPreviewModule
  ],
  exports: [
    PostPreviewModalComponent
  ]
})

export class PostPreviewModalModule {}
