import { Component } from '@angular/core';
import { Platform,ToastController, App, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SignUpPage } from '../pages/sign-up/sign-up';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignUpPage;

  constructor(public appCtrl: App,
    public toastCtrl: ToastController,private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
