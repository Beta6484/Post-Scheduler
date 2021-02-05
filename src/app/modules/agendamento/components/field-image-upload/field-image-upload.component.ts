import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-image-upload',
  templateUrl: './field-image-upload.component.html',
  styleUrls: ['./field-image-upload.component.scss']
})

export class FieldImageUploadComponent implements OnInit {
  @Input() initialVal?: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public getSelectedFile(res): void {
    this.onSelect.emit(res);
  }
}
