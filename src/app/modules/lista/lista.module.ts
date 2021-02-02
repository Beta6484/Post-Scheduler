import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { PostPreviewModalModule } from 'src/app/shared/components/post-preview-modal';
import { FormatPostDateTimePipe } from 'src/app/shared/pipes/format-post-dateTime';
import { DataTableComponent, OrderButtonComponent } from './components';
import { ListaComponent } from './lista.component';
import { ROUTES } from './lista.routes';

@NgModule({
  declarations: [
    ListaComponent,
    DataTableComponent,
    FormatPostDateTimePipe,
    OrderButtonComponent
  ],
  imports: [
    CommonModule,
    OrderModule,
    PostPreviewModalModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class ListaModule {}
