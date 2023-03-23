import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile?: File;

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files)
      this.selectedFile = element.files[0];
  }
}
