import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpdetailPage } from '../helpdetail/helpdetail';
/**
 * Generated class for the HelpdetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpdet',
  templateUrl: 'helpdet.html',
})
export class HelpdetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go(){
    this.navCtrl.push(HelpdetailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpdetPage');
  }

}
