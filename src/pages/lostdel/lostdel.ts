import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { ProductPage } from '../product/product';

/**
 * Generated class for the LostdelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostdel',
  templateUrl: 'lostdel.html',
})
export class LostdelPage {

  content;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  founds=[];
  ionViewDidLoad() {
    this.http.get('/before/found').subscribe(data=>{
     this.founds[0] = this.content;
    })
  }

  delete(i){
    this.http.post('/before/found',{item_id:this.founds[i].item_id}).subscribe(data=>{
      console.log(this.founds[i].item_id);
    });
    this.navCtrl.pop();
  }

}
