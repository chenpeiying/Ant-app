import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { PublicPage } from '../public/public';
import { HelpPage } from '../help/help';
import { SetPage } from '../set/set';
import {HttpClient} from '@angular/common/http';
import { MyReplacePage } from '../my-replace/my-replace';


/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var username=localStorage.getItem("name");
    document.getElementById('name').innerText=username;

    var img=localStorage.getItem("img").toString();
    document.getElementById('img').setAttribute('src',img);
  }

  seting(){
    this.navCtrl.push(SetPage);
  }
  goto(){
    this.navCtrl.push(ProductPage);
  }
  go(){
    this.navCtrl.push(MyReplacePage);
  }
  public(){
    this.navCtrl.push(PublicPage);
  }
  help(){
    this.navCtrl.push(HelpPage);
  }
}
