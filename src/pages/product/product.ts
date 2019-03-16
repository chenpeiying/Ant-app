import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PartdelPage } from '../partdel/partdel';
import { SocialdelPage } from '../socialdel/socialdel';
import { LostdelPage } from '../lostdel/lostdel';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {


  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  issues;
  issue=[];
  jobs;
  job=[];
  founds;
  found=[];
  ionViewDidLoad() {
    var username=localStorage.getItem("name");
    //console.log(username);

    this.http.get('/before/partime_job').subscribe(data=>{
      this.jobs=data;
      var a=0;
      for(var i=0;i<this.jobs.length;i++){
        if(this.jobs[i].username==username){
          this.job[a]=this.jobs[i];
          a++;
        }
      }
    })
    this.http.get('/before/issue').subscribe(data=>{
      this.issues = data;
      var b=0;
      for(var i=0;i<this.issues.length;i++)
      {
        if(this.issues[i].username==username){
          this.issue[b]=this.issues[i];
          b++;
        }
      }
     })
     this.http.get('/before/found').subscribe(data=>{
      this.founds = data;
      var c=0;
      for(var i=0;i<this.founds.length;i++)
      {
        if(this.founds[i].username==username){
          this.found[c]=this.founds[i];
          c++;
        }
      }
     })
  }

  GoDetail1(i){
    this.navCtrl.push(PartdelPage,{
      content:this.job[i]
    });
  }
  GoDetail2(i){
    this.navCtrl.push(SocialdelPage,{
      content:this.issue[i]
    });
  }
  GoDetail3(i){
    this.navCtrl.push(LostdelPage,{
      content:this.found[i]
    });
  }
}
