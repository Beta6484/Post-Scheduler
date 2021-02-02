import { Component } from '@angular/core';
import { MockDataService } from './shared/services/mock-data/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(
    private mockData: MockDataService
  ) {
    this.mockData.storeInitialData();
  }
}
