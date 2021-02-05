import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ButtonModule } from 'src/app/shared/components/button';
import { CustomCheckboxModule } from 'src/app/shared/components/custom-checkbox';
import { FileUploadModule } from 'src/app/shared/components/file-upload';
import { ModalModule } from 'src/app/shared/components/modal';
import { MyEmojiModule } from 'src/app/shared/components/my-emoji';
import { PostPreviewModule } from 'src/app/shared/components/post-preview';
import { AgendamentoComponent } from './agendamento.component';
import { ROUTES } from './agendamento.routes';
import { FieldDateTimeComponent, FieldImageUploadComponent, FieldPostPreviewComponent, FieldSocialNetworksComponent, FieldTextAreaComponent } from './components';

@NgModule({
  declarations: [
    AgendamentoComponent,
    FieldSocialNetworksComponent,
    FieldDateTimeComponent,
    FieldTextAreaComponent,
    FieldImageUploadComponent,
    FieldPostPreviewComponent
  ],
  imports: [
    CommonModule,
    CustomCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
    FileUploadModule,
    PostPreviewModule,
    ButtonModule,
    ModalModule,
    MyEmojiModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    AgendamentoComponent
  ]
})

export class AgendamentoModule {}
