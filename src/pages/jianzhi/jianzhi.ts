import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
/**
 * Generated class for the JianzhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jianzhi',
  templateUrl: 'jianzhi.html',
})
export class JianzhiPage {
  username:string=localStorage.getItem("name");
  part_date;
  part_name; 
  part_price;
  part_worktime;
  part_addr;
  part_content;

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  gosuccess(){
    this.navCtrl.push(PushsuccessPage);

    //获取当前时间
    var date = new Date();
    var time = date.toLocaleTimeString();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    this.part_date = year + '-' + month + '-' + day + time;

    this.http.post('/before/twojob/jianzhi',{username:this.username,part_date:this.part_date,
      part_name:this.part_name,part_price:this.part_price,part_worktime:this.part_worktime,
      part_addr:this.part_addr,part_content:this.part_content}).subscribe(data => { 
    })
  }
  goback(){
    this.navCtrl.pop();
  }
}
