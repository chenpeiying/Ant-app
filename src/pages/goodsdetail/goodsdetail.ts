import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the GoodsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goodsdetail',
  templateUrl: 'goodsdetail.html',
})
export class GoodsdetailPage {

  content;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  goods=[];
  ionViewDidLoad(){
    this.http.get('/before/commodity').subscribe(data=>{
      this.goods[0] = this.content;
    })
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
