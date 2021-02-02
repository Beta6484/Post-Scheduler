import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatPostDatePipe } from '../../pipes/format-post-date';
import { PreviewInstagramComponent, PreviewLinkedinComponent } from './components';
import { PostPreviewComponent } from './post-preview.component';

@NgModule({
  declarations: [
    PostPreviewComponent,
    PreviewInstagramComponent,
    PreviewLinkedinComponent,
    FormatPostDatePipe
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
