import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agendamento.component';
import { ROUTES } from './agendamento.routes';

@NgModule({
  declarations: [
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    AgendamentoComponent
  ],
})

export class AgendamentoModule {}
