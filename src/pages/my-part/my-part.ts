import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartDetailPage } from '../part-detail/part-detail';

/**
 * Generated class for the MyPartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-part',
  templateUrl: 'my-part.html',
})
export class MyPartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPartPage');
  }

  GoDetail(){
    this.navCtrl.push(PartDetailPage);
  }
}
