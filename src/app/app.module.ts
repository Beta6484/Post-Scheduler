import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { DatabaseModule } from './database/database.module';
import { AgendamentoModule } from './modules/agendamento/agendamento.module';
import { HomeModule } from './modules/home/home.module';
import { ListaModule } from './modules/lista/lista.module';
import { HeaderModule } from './shared/components/header/header.module';

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
