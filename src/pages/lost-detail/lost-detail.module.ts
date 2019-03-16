import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostDetailPage } from './lost-detail';

@NgModule({
  declarations: [
    LostDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LostDetailPage),
  ],
})
export class LostDetailPageModule {}
