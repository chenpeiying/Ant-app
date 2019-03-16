import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the PartDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-part-detail',
  templateUrl: 'part-detail.html',
})
export class PartDetailPage {

  content;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  jobs;
  job=[];
  ionViewDidLoad() {
    this.http.get('/before/partime_job').subscribe(data=>{
      this.job[0] = this.content;
    });
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }

}
