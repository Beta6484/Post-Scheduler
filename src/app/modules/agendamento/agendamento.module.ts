import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CustomCheckboxModule } from 'src/app/shared/components/custom-checkbox/custom-checkbox.module';
import { EmojiPickerModule } from 'src/app/shared/components/emoji-picker/emoji-picker.module';
import { AgendamentoComponent } from './agendamento.component';
import { ROUTES } from './agendamento.routes';

@NgModule({
  declarations: [
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    CustomCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
    EmojiPickerModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    AgendamentoComponent
  ]
})

export class AgendamentoModule {}
