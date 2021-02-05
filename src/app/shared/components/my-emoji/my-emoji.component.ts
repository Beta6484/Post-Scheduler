import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmojiList } from '../../utils/emoji-list';

@Component({
  selector: 'app-my-emoji',
  templateUrl: './my-emoji.component.html',
  styleUrls: ['./my-emoji.component.scss']
})

export class MyEmojiComponent implements OnInit {
  public emojiList: number[] = EmojiList;
  public pickerOppened: boolean = false;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public formatEmoji(emoji): string {
    return String.fromCodePoint(emoji);
  }

  public toggleEmojiPicker(): void {
    this.pickerOppened = !this.pickerOppened;
  }

  public getSelected(res): void {
    this.onSelect.emit(res);
    this.toggleEmojiPicker();
  }
}
