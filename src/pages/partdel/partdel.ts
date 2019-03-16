import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the PartdelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partdel',
  templateUrl: 'partdel.html',
})
export class PartdelPage {

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

  delete(i){
    this.http.post('/before/partime_job',{part_id:this.job[i].part_id}).subscribe(data=>{});
    this.navCtrl.pop();
  }

}
