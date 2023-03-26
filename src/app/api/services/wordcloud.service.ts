import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WordCloudService {
  constructor(private readonly apiService: ApiService) {}

  async uploadAndProcessFile(file: File): Promise<string> {
    const apiPath = '/upload';

    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      contentType: 'multipart/form-data',
    });

    return this.apiService.post<string>(apiPath, formData, headers, { responseType: 'text' });
  }

  async getWordCounts(id: string): Promise<Record<string, number>> {
    const apiPath = `/${id}`;

    return this.apiService.get<Record<string, number>>(apiPath);
  }
}
