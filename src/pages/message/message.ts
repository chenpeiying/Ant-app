import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { HttpClient }from '@angular/common/http';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }
  chats;
  ch=[];
  ionViewDidLoad() {
    var username=localStorage.getItem("name");
    this.http.get('/before/chat').subscribe(data=>{
      this.chats = data;
      var a=0;
      for(var i=0;i<this.chats.length;i++){
        if(this.chats[i].username==username){  
          this.ch[a]=this.chats[i];
          a++;
        }
      }
      console.log(this.ch);
    })
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
