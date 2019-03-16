import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
@IonicPage()
@Component({
  selector: 'page-think',
  templateUrl: 'think.html',
})
export class ThinkPage {
  isClick(){
    this.navCtrl.push(ChatPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThinkPage');
  }
}
