import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDragNDrop]'
})

export class DragNDropDirective {
  @Output() showError = new EventEmitter<boolean>();
  @Output() onFileDropped = new EventEmitter<any>();
  @Input() preventBodyDrop = true;
  @HostBinding('style.background-color') background = '#FFFFFF';
  @HostBinding('style.opacity') opacity = '1';

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#FFFFFF';
    this.opacity = '1';

    const file = event.dataTransfer.files[0];

    if(file.type === 'image/jpeg' || file.type === 'image/png') {
      this.showError.emit(false);
      this.onFileDropped.emit(file);
    } else {
      this.showError.emit(true);
      return;
    }
  }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#FFF3E0';
    this.opacity = '0.8';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#FFFFFF';
    this.opacity = '1';
  }

  @HostListener('body:dragover', ['$event']) onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('body:drop', ['$event']) onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }
}
