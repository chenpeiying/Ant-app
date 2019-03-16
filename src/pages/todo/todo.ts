import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {
    
  }
  txt:string;
  counter:number = 0;
  arr:Msg[]=[];
  getValue(e){
    if(e.keyCode == 13){
      this.arr.push(new Msg(this.txt,false));
      this.txt = '';
      this.count();
    }
  }
  count(){
    this.counter = 0;
    this.arr.forEach( (value,index)=>{
      if(value.done){
        this.counter++;
      }
    } );
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done = !this.arr[idx].done;
    this.count();
  }
}

export class Msg{
  constructor(public title:string,public done:boolean) {}
}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TodoPage');
  // }


