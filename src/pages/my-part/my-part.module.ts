import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPartPage } from './my-part';

@NgModule({
  declarations: [
    MyPartPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPartPage),
  ],
})
export class MyPartPageModule {}
