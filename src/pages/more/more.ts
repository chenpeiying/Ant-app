import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoodsdetailPage } from '../goodsdetail/goodsdetail';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  goods;
  ionViewDidLoad(){
    this.http.get('/before/commodity').subscribe(data=>{
      this.goods = data;
    })
  }

  Godetail(i){
    this.navCtrl.push(GoodsdetailPage,{
      content:this.goods[i]
    });
  }

}
