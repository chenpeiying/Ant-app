import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MinePage} from '../mine/mine'

/**
 * Generated class for the AnliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anli',
  templateUrl: 'anli.html',
})
export class AnliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  close(){
    this.navCtrl.pop();
  }
  go(){
    this.navCtrl.push(MinePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnliPage');
  }

}
