import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Bem Vindo ao Agendamento de Posts mLabs!')
  }

  public goToScheduler() {
    this.router.navigate(['agendamento']);
  }
}
