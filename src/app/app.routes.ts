import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'agendamento',
    loadChildren: './modules/agendamento/agendamento.module#AgendamentoModule'
  },
  {
    path: 'lista',
    loadChildren: './modules/lista/lista.module#ListaModule'
  }
]
