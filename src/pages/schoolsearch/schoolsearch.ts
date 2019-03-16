import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchoolsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schoolsearch',
  templateUrl: 'schoolsearch.html',
})
export class SchoolsearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
   
  }
  id:number;
  status:boolean=true;
  changecontent(id){
     this.status=!this.status;
     if(this.status==true){
       document.getElementById(id).style.display= 'block';
     }
     else{
       document.getElementById(id).style.display= 'none';
     }
   }
}
