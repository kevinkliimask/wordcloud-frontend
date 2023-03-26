import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WordCloudService } from 'src/app/api/services/wordcloud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  selectedFile?: File;
  errorMessage?: string;

  constructor(
    private readonly router: Router,
    private readonly wordCloudService: WordCloudService
  ) {}

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files) this.selectedFile = element.files[0];
  }

  async uploadFile() {
    if (this.selectedFile) {
      try {
        const uploadId = await this.wordCloudService.uploadAndProcessFile(
          this.selectedFile
        );
        this.router.navigate([uploadId]);
      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = JSON.parse(error.error).message;
        }
      }
    }
  }
}
