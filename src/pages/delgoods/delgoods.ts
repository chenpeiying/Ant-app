import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { HttpClient } from '@angular/common/http';
import { PublicPage } from '../public/public';


/**
 * Generated class for the DelgoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delgoods',
  templateUrl: 'delgoods.html',
})
export class DelgoodsPage {

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

  delete(i){
    this.http.post('/before/commodity',{goods_id:this.goods[i].goods_id}).subscribe(data=>{
      
    });
    this.navCtrl.pop();
  }
}
