import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyReplacePage } from './my-replace';

@NgModule({
  declarations: [
    MyReplacePage,
  ],
  imports: [
    IonicPageModule.forChild(MyReplacePage),
  ],
})
export class MyReplacePageModule {}
