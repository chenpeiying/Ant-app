import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { ZiliaoPage } from '../ziliao/ziliao';
import { SignUpPage } from '../sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  uname:string;
  constructor(public App:App,public navCtrl: NavController, public navParams: NavParams) {
    this.uname = navParams.get('name');
  }

  ionViewDidLoad() {
    //console.log(this.uname);
  }

  ziliao(){
    this.navCtrl.push(ZiliaoPage,{
      name:this.uname
    });
  }
  signup(){
    this.App.getRootNavs()[0].setRoot(SignUpPage);
  }

}
