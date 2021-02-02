import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { PostPreviewModalModule } from 'src/app/shared/components/post-preview-modal';
import { ListaComponent } from './lista.component';
import { ROUTES } from './lista.routes';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    OrderModule,
    PostPreviewModalModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class ListaModule {}
