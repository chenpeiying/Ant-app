import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HttpClient}from '@angular/common/http';
import { DelgoodsPage } from '../delgoods/delgoods';

/**
 * Generated class for the PublicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public',
  templateUrl: 'public.html',
})
export class PublicPage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  goods;
  good=[];
  ionViewDidLoad() {
    var username=localStorage.getItem("name");
    this.http.get('/before/commodity').subscribe(data=>{
      this.goods=data;
      var a=0;
      for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].username==username){
          this.good[a]=this.goods[i];
          a++;
        }
      }
    })
  }

  godetail(i){
    this.navCtrl.push(DelgoodsPage,{
      content:this.good[i]
    });
  }
}
