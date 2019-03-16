import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoodsdetailPage } from '../goodsdetail/goodsdetail';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the GoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class GoodsPage {

  isActive=0;
  change(i){
    this.isActive=i;
  }

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  all;
  goods=[];
  study=[];
  makeup=[];
  life=[];
  other=[];
  ionViewDidLoad(){
    var userschool=localStorage.getItem("school");
    this.http.get('/before/commodity').subscribe(data=>{
      this.all=data;
      var m=0;
      for(var n=0;n<this.all.length;n++){
        if(this.all[n].goods_addr==userschool){
          this.goods[m]=this.all[n];
          m++;
        }
      }

      var a=0,b=0,c=0,d=0;
      for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].goods_type=='学习'){
          this.study[a]=this.goods[i];
          a++;
        }
        if(this.goods[i].goods_type=='美妆'){
          this.makeup[b]=this.goods[i];
          b++;
        }
        if(this.goods[i].goods_type=='生活'){
          this.life[c]=this.goods[i];
          c++;
        }
        if(this.goods[i].goods_type=='其他'){
          this.other[d]=this.goods[i];
          d++;
        }
      }
    })
  }
  GoSdetail(i){
    this.navCtrl.push(GoodsdetailPage,{
      content:this.study[i]
    });
  }
  GoMdetail(i){
    this.navCtrl.push(GoodsdetailPage,{
      content:this.makeup[i]
    });
  }
  GoLdetail(i){
    this.navCtrl.push(GoodsdetailPage,{
      content:this.life[i]
    });
  }
  GoOdetail(i){
    this.navCtrl.push(GoodsdetailPage,{
      content:this.other[i]
    });
  }
}
