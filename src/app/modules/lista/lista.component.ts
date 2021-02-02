import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent {
  public schedulesList: any[];
  public reverse: boolean = false;
  public order: any = 'id';

  constructor(
    private title: Title
  ) {
    this.title.setTitle('Lista de Posts Agendados - mLabs');
  }
}
