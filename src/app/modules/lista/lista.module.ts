import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaComponent } from './lista.component';
import { ROUTES } from './lista.routes';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ListaModule { }
