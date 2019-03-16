import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SocialdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialdetail',
  templateUrl: 'socialdetail.html',
})
export class SocialdetailPage {

  content;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  issue=[];
  ionViewDidLoad(){
    this.http.get('/before/issue').subscribe(data=>{
      this.issue[0] = this.content;
    })
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
