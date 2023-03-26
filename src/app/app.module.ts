import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { IconComponent } from './components/shared/icon/icon.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [AppComponent, FileUploadComponent, IconComponent, ResultsComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
