import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent {
  public file: string;
  public fileError: boolean = false;
  @Input() fileSelected: boolean = false;
  @Output() fileUploaded: EventEmitter<string | ArrayBuffer> = new EventEmitter();

  public uploadFile(event) {
    let reader = new FileReader();
    this.file = event && event.name;

    if(event.type === 'image/jpeg' || event.type === 'image/png') {
      reader.readAsDataURL(event);

      reader.onload = () => {
        this.fileUploaded.emit(reader.result);
        this.fileSelected = true;
      };

      reader.onerror = error => {
        this.fileSelected = false;
        console.error('Error: ', error)
      };

      this.fileError = false;
    } else {
      this.fileError = true;
      return;
    }
  }

  public deleteFile() {
    this.fileUploaded.emit('');
    this.fileSelected = false;
    this.fileError = false;
  }
}
