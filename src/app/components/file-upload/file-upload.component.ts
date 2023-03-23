import { Component } from '@angular/core';
import { UploadService } from 'src/app/api/services/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile?: File;

  constructor(private readonly uploadService: UploadService) {}

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files)
      this.selectedFile = element.files[0];
  }

  async uploadFile() {
    if (this.selectedFile)
      console.log(await this.uploadService.uploadAndProcessFile(this.selectedFile));
  }
}
