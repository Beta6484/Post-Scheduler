import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { DatabaseModule } from './database';
import { AgendamentoModule } from './modules/agendamento';
import { HomeModule } from './modules/home';
import { ListaModule } from './modules/lista';
import { HeaderModule } from './shared/components/header';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    AgendamentoModule,
    ListaModule,
    DatabaseModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
