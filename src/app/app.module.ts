import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
