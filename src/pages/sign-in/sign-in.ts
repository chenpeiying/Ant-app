import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  username:string;
  schoolid;
  school:string;
  telNum;
  psw;
  // headers:"Content-Type': 'application/x-www-form-urlencoded'";
  // header = new Headers();
  // header.append('Content-Type', 'application/x-www-form-urlencoded');
  constructor(public http:HttpClient,public App:App,public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    
  }
  signup(){
    this.App.getRootNavs()[0].setRoot(SignUpPage);
    console.log(this.username,this.school,this.schoolid,this.telNum);
    this.http.post('/before/user/signin',{username:this.username,schoolId:this.schoolid,school:this.school,telNum:this.telNum,password:this.psw,identity:this.id}).subscribe(data => {
      // console.log(data);
    })
  }
  signup1(){
    this.App.getRootNavs()[0].setRoot(SignUpPage);
  }

  id:string='';
  show(){
    var txt = this.id;
    // console.log(txt);
    if(txt=='学生'){
      document.getElementById('number').style.display="";
    }
    else{
      document.getElementById('number').style.display="none";
    }
  }
  

}
