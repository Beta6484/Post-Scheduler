import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-field-text-area',
  templateUrl: './field-text-area.component.html',
  styleUrls: ['./field-text-area.component.scss']
})

export class FieldTextAreaComponent implements OnInit {
  public caretPos: number = 0;
  public text: string;
  @Input() initialVal?: string;
  @Output() onInput: EventEmitter<any> = new EventEmitter();
  @ViewChild('textArea', { static: true }) textArea: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  public getTyped(): void {
    this.onInput.emit(this.text);
  }

  public getCaretPos(): void {
    if (this.textArea.nativeElement.selectionStart || this.textArea.nativeElement.selectionStart == 0) {
      this.caretPos = this.textArea.nativeElement.selectionStart;
    }
  }

  public getEmojiSelected(res): void  {
    this.text = this.text.slice(0, this.caretPos) + res + this.text.slice(this.caretPos);
    this.getTyped();
  }
}
