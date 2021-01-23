import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class HomeModule {}
