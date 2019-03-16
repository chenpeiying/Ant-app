import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialdetailPage} from '../socialdetail/socialdetail';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }


  issues;
  ionViewDidLoad() {
    this.http.get('/before/issue').subscribe(data=>{
      this.issues=data;
    })
  }

  GoDetail(i){
    this.navCtrl.push(SocialdetailPage,{
      content:this.issues[i]
    });
  }

}
