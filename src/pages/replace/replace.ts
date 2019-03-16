import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the ReplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-replace',
  templateUrl: 'replace.html',
})
export class ReplacePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  delivery;
  ionViewDidLoad() {
    this.http.get('/before/delivery').subscribe(data=>{
     this.delivery=data;
    })
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
