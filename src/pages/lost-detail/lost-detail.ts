import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the LostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lost-detail',
  templateUrl: 'lost-detail.html',
})
export class LostDetailPage {

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

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
