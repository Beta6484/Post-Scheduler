import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatPostDataPipe } from '../../pipes/format-post-data.pipe';
import { PreviewInstagramComponent } from './components/preview-instagram/preview-instagram.component';
import { PreviewLinkedinComponent } from './components/preview-linkedin/preview-linkedin.component';
import { PostPreviewComponent } from './post-preview.component';

@NgModule({
  declarations: [
    PostPreviewComponent,
    PreviewInstagramComponent,
    PreviewLinkedinComponent,
    FormatPostDataPipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    PostPreviewComponent
  ]
})

export class PostPreviewModule {}