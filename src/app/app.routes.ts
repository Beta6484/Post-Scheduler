import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home#HomeModule',
  },
  {
    path: 'agendamento',
    loadChildren: './modules/agendamento#AgendamentoModule'
  },
  {
    path: 'lista',
    loadChildren: './modules/lista#ListaModule'
  }
]
