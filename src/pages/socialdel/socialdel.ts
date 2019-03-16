import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SocialdelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialdel',
  templateUrl: 'socialdel.html',
})
export class SocialdelPage {

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

  delete(i){
    this.http.post('/before/issue',{issue_id:this.issue[i].issue_id}).subscribe(data=>{});
    this.navCtrl.pop();
  }

}
