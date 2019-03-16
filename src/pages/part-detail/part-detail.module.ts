import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartDetailPage } from './part-detail';

@NgModule({
  declarations: [
    PartDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PartDetailPage),
  ],
})
export class PartDetailPageModule {}
