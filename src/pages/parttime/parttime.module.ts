import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParttimePage } from './parttime';

@NgModule({
  declarations: [
    ParttimePage,
  ],
  imports: [
    IonicPageModule.forChild(ParttimePage),
  ],
})
export class ParttimePageModule {}
