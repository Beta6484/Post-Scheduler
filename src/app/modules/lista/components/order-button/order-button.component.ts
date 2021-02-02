import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.scss']
})

export class OrderButtonComponent {
  @Input() active: boolean = false;
  @Input() order: string;
  @Input() reverse: boolean = true;
  @Output() action: EventEmitter<any> = new EventEmitter();

  public doAction(val: string) {
    this.action.emit(val);
  }

  public toggleReverse(): boolean {
    if(this.active)
      return this.reverse;
  }
}
