import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl: string;

  constructor(
    @Inject(DOCUMENT) document: Document,
    private readonly httpClient: HttpClient,
  ) {
    this.baseUrl = this.buildBaseUrl(document.location.href);
  }

  private buildBaseUrl(href: string): string {
    const url = new URL(href);
    const protocol = url.protocol;
    const hostname = url.hostname;

    if (hostname === 'localhost') return `${protocol}//${hostname}:8080`;
    else throw new Error('Invalid hostname'); // TODO: Support for production
  }

  private buildUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  get<T>(path: string, headers?: HttpHeaders, options?: object): Promise<T> {
    return firstValueFrom(this.httpClient.get<T>(this.buildUrl(path), { headers, ...options }));
  }

  post<T>(path: string, body: any = null, headers?: HttpHeaders, options?: object): Promise<T> {
    return firstValueFrom(this.httpClient.post<T>(this.buildUrl(path), body, { headers, ...options }));
  }
}
