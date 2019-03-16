import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsdetailPage } from './goodsdetail';

@NgModule({
  declarations: [
    GoodsdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsdetailPage),
  ],
})
export class GoodsdetailPageModule {}
