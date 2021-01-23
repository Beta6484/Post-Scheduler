import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  }
]
