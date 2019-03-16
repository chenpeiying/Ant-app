import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpdetPage } from '../helpdet/helpdet';
import { FeedbackPage } from '../feedback/feedback';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go(){
    this.navCtrl.push(HelpdetPage);
  }
  goto(){
    this.navCtrl.push(FeedbackPage);
  }

}
