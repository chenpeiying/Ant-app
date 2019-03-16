import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartDetailPage } from '../part-detail/part-detail';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the ParttimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parttime',
  templateUrl: 'parttime.html',
})
export class ParttimePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  jobs;
  ionViewDidLoad() {
    this.http.get('/before/partime_job').subscribe(data=>{
     this.jobs=data;
    })
  }
  GoDetail(i){
    this.navCtrl.push(PartDetailPage,{
      content:this.jobs[i]
    });
  }

}
