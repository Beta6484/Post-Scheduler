import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-field-text-area',
  templateUrl: './field-text-area.component.html',
  styleUrls: ['./field-text-area.component.scss']
})

export class FieldTextAreaComponent implements OnInit {
  public caretPos: number = 0;
  public text: string = '';
  @Input() socialData$: BehaviorSubject<Schedule>;
  @Output() onInput: EventEmitter<any> = new EventEmitter();
  @ViewChild('textArea', { static: true }) textArea: ElementRef;

  ngOnInit(): void {
    this.checkDraft();
  }

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

  private checkDraft(): void {
    this.socialData$.pipe(take(2)).subscribe(res => {
      if(Object.keys(res).length > 0) {
        this.text = res.text;
      }
    });
  }
}
