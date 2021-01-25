import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() text: string;
  @Input() colorStyle: string = 'orange';
  @Output() action: EventEmitter<any> = new EventEmitter();

  public doAction() {
    this.action.emit();
  }
}
