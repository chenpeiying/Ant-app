import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ShiwuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shiwu',
  templateUrl: 'shiwu.html',
})
export class ShiwuPage {
  username:string=localStorage.getItem("name");
  item_name;
  item_time;
  item_type;
  item_addr;
  item_date;
  item_content;
  item_pic;
  item_number;

  lostname;
  chatting:string='系统推送';
  content:string='您丢失的饭卡已经找到，请注意查看失物招领信息';

  constructor(public http:HttpClient,private camera: Camera,public navCtrl: NavController,private imagePicker: ImagePicker,public navParams: NavParams) {
  }
  users;
  ionViewDidLoad() {
    
    this.http.get('/before/users').subscribe(data=>{
      this.users=data;
    })
  }
  num='';
  gosuccess(){
    this.navCtrl.push(PushsuccessPage);
    //添加数据到失物招领表

    //获取当前时间
    var date = new Date();
    var time = date.toLocaleTimeString();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    this.item_time = year + '-' + month + '-' + day + time;

    this.http.post('/before/twofound/shiwu',{username:this.username,item_name:this.item_name,item_time:this.item_time,item_type:this.item_type,
    item_addr:this.item_addr,item_date:this.item_date,item_content:this.item_content,item_number:this.item_number}).subscribe(data => {
      // console.log(data);
    })
    //添加数据到消息表，发送推送给丢失人
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].studentId==this.num){
        this.lostname=this.users[i].username;
      }
    }
  }
  goback(){
    this.navCtrl.pop();
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

  imgURL:string;
  takephoto(){
    var div1=document.getElementById('div1');
    var div2=document.createElement('div');
    var img=document.createElement('img');
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
    img.src=this.imgURL;
    img.style.border="1px solid #cccccc";
    div2.appendChild(img);
    div1.appendChild(div2);
    }, (err) => {
    // Handle error
    });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }
  
  selectphoto(){
    var div1=document.getElementById('div1');
    var div2=document.createElement('div');
    const options:  ImagePickerOptions = {
      maximumImagesCount: 6,
      width: 200,
      quality: 100, 
      outputType:1//特别注意
    };
    this.imagePicker.getPictures(options).then((results) => {
      for(var i = 0; i < results.length; i++) {
        var img=document.createElement('img');
        let base64Image = 'data:image/jpeg;base64,' +results[i];
        this.imgURL=base64Image;
        img.src=this.imgURL;
        img.style.border="1px solid #cccccc";
        div2.appendChild(img);
        div1.appendChild(div2);
      }
    }, (err) => { });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }

  back(){
      this.footersty=!this.footersty;
      document.getElementById('footer').style.display="none";
  }

  kind:string='';
  show(){
    var txt = this.kind;
    if(txt=='饭卡'){
      document.getElementById('number').style.display="";
    }
    else if(txt=='一卡通'){
      document.getElementById('number').style.display="";
    }
    else{
      document.getElementById('number').style.display="none";
    }
  }
}
