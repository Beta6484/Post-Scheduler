import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ButtonModule } from 'src/app/shared/components/button';
import { CustomCheckboxModule } from 'src/app/shared/components/custom-checkbox';
import { EmojiPickerModule } from 'src/app/shared/components/emoji-picker';
import { FileUploadModule } from 'src/app/shared/components/file-upload';
import { ModalModule } from 'src/app/shared/components/modal';
import { PostPreviewModule } from 'src/app/shared/components/post-preview';
import { AgendamentoComponent } from './agendamento.component';
import { ROUTES } from './agendamento.routes';
import { FieldSocialNetworksComponent } from './components';

@NgModule({
  declarations: [
    AgendamentoComponent,
    FieldSocialNetworksComponent
  ],
  imports: [
    CommonModule,
    CustomCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
    EmojiPickerModule,
    FileUploadModule,
    PostPreviewModule,
    ButtonModule,
    ModalModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    AgendamentoComponent
  ]
})

export class AgendamentoModule {}
