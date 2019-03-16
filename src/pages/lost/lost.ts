import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostDetailPage } from '../lost-detail/lost-detail';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})
export class LostPage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }


  founds;
  ionViewDidLoad() {
    this.http.get('/before/found').subscribe(data=>{
     this.founds=data;
    })
  }

  GoDetail(i){
    this.navCtrl.push(LostDetailPage,{
      content:this.founds[i]
    });
  }
}
