import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UploadPage } from './upload.page';

const uploadRoutes: Routes = [
  { path: '', component: UploadPage }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(uploadRoutes)
  ],
  declarations: [UploadPage]
})
export class UploadPageModule { }
