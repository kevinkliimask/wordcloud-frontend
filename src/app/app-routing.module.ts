import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: FileUploadComponent },
  { path: ':id', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
