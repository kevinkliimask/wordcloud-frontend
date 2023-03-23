import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private readonly apiService: ApiService) {}

  async uploadAndProcessFile(file: File): Promise<object> {
    const apiPath = '/upload';

    const formData= new FormData();
    formData.append('file', file);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.apiService.post<object>(apiPath, formData, headers)
  }
}
