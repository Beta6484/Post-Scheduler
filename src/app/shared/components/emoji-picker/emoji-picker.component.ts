import { Component, EventEmitter, Output } from '@angular/core';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})

export class EmojiPickerComponent {
  public emojiToggled: boolean = false;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  public onEmojiSelect(event: EmojiEvent) {
    this.onSelect.emit(event.emoji.native);
    this.toggleEmoji();
  }

  public toggleEmoji() {
    this.emojiToggled = !this.emojiToggled;
  }
}
