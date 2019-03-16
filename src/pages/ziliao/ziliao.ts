import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,App} from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import {HttpClient} from '@angular/common/http';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the ZiliaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ziliao',
  templateUrl: 'ziliao.html',
})
export class ZiliaoPage {

  constructor(public App:App,public http:HttpClient,private camera: Camera,private imagePicker: ImagePicker, public navParams: NavParams,public navCtrl: NavController,private toastCtrl: ToastController) {
  }

  users;
  username:string;
  id;
  user=[];

  uname;
  psw;
  tel;

  ionViewDidLoad() {
    this.username=localStorage.getItem("name");
    // console.log(this.username);
    this.http.get('/before/users').subscribe(data=>{
      this.users=data;
      var a=0;
      for(var i=0;i<this.users.length;i++){
        if(this.users[i].username==this.username){
          this.user[a]=this.users[i];
          a++;
        }
      }
    })
  }
  
  footersty:boolean=false;

  change(){
    this.footersty=!this.footersty;
    if(this.footersty==false)
    {
      document.getElementById('footer').style.display="none";
    }
    else{
      document.getElementById('footer').style.display="block";
    }
  }

  imgURL:string="../../assets/imgs/touxiang.jpg";
  takephoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
  
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.imgURL=base64Image;
    }, (err) => {
    // Handle error
    });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }
  
  selectphoto(){
    const options:  ImagePickerOptions = {
      maximumImagesCount:2,
      // width: 120,
      // height: 120,
      quality: 100, 
      outputType:1//特别注意
    };
    this.imagePicker.getPictures(options).then((results) => {
      for(var i = 0; i < results.length; i++) {
        var img=document.createElement('img');
        let base64Image = 'data:image/jpeg;base64,' +results[i];
        this.imgURL=base64Image;
      }
    }, (err) => { });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }

  back(){
      this.footersty=!this.footersty;
      document.getElementById('footer').style.display="none";
  }
  setting(){
    this.id=localStorage.getItem("id");
    this.http.post('/before/users',{username:this.uname,telNum:this.tel,password:this.psw,id:this.id}).subscribe(data=>{
      
    });
    this.App.getRootNavs()[0].setRoot(SignUpPage);
  }
  

}
