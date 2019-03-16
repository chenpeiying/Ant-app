import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SocialPage } from '../pages/social/social';
import { MessagePage } from '../pages/message/message';
import { MinePage } from '../pages/mine/mine';
import { SearchPage } from '../pages/search/search';
import { SchoolsearchPage } from '../pages/schoolsearch/schoolsearch';
import { GoodsPage } from '../pages/goods/goods';
import { LostPage } from '../pages/lost/lost';
import { GoodsdetailPage } from '../pages/goodsdetail/goodsdetail';
import { MorePage } from '../pages/more/more';
import { ParttimePage } from '../pages/parttime/parttime';
import { PartDetailPage } from '../pages/part-detail/part-detail';
import { LostDetailPage } from '../pages/lost-detail/lost-detail';
import { FriendPage } from '../pages/friend/friend';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AddPage } from '../pages/add/add';
import { DaiquPage } from '../pages/daiqu/daiqu';
import { PushsuccessPage } from '../pages/pushsuccess/pushsuccess';
import { JianzhiPage } from '../pages/jianzhi/jianzhi';
import { ShiwuPage } from '../pages/shiwu/shiwu';
import { WupinPage } from '../pages/wupin/wupin';
import { YiwoPage } from '../pages/yiwo/yiwo';
import { ChatPage } from '../pages/chat/chat';
import { FeedbackPage } from '../pages/feedback/feedback';
import { HelpPage } from '../pages/help/help';
import { HelpdetPage } from '../pages/helpdet/helpdet';
import { HelpdetailPage } from '../pages/helpdetail/helpdetail';
import { ProductPage } from '../pages/product/product';
import { PublicFeature } from '@angular/core/src/render3';
import { PublicPage } from '../pages/public/public';
import { SetPage } from '../pages/set/set';
import { SuccessPage } from '../pages/success/success';
import { ThinkPage } from '../pages/think/think';
import { ZiliaoPage } from '../pages/ziliao/ziliao';
import { SocialdetailPage } from '../pages/socialdetail/socialdetail';
import { ReplacePage } from '../pages/replace/replace';
import { TodoPage } from '../pages/todo/todo';
import { MyReplacePage } from '../pages/my-replace/my-replace';
import { DelgoodsPage } from '../pages/delgoods/delgoods';
import { LostdelPage } from '../pages/lostdel/lostdel';
import { SocialdelPage } from '../pages/socialdel/socialdel';
import { PartdelPage } from '../pages/partdel/partdel';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SocialPage,
    MessagePage,
    MinePage,
    SearchPage,
    SchoolsearchPage,
    GoodsPage,
    LostPage,
    GoodsdetailPage,
    MorePage,
    ParttimePage,
    PartDetailPage,
    LostDetailPage,
    FriendPage,
    SignInPage,
    SignUpPage,
    AddPage,
    DaiquPage,
    JianzhiPage,
    ShiwuPage,
    PushsuccessPage,
    WupinPage,
    YiwoPage,
    ChatPage,
    FeedbackPage,
    HelpPage,
    HelpdetPage,
    HelpdetailPage,
    ProductPage,
    PublicPage,
    SetPage,
    SuccessPage,
    ThinkPage,
    ZiliaoPage,
    SocialdetailPage,
    ReplacePage,
    TodoPage,
    MyReplacePage,
    DelgoodsPage,
    LostdelPage,
    SocialdelPage,
    PartdelPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SocialPage,
    MessagePage,
    MinePage,
    SearchPage,
    SchoolsearchPage,
    GoodsPage,
    LostPage,
    GoodsdetailPage,
    MorePage,
    ParttimePage,
    PartDetailPage,
    LostDetailPage,
    FriendPage,
    SignInPage,
    SignUpPage,
    AddPage,
    DaiquPage,
    JianzhiPage,
    ShiwuPage,
    PushsuccessPage,
    WupinPage,
    YiwoPage,
    ChatPage,
    FeedbackPage,
    HelpPage,
    HelpdetPage,
    HelpdetailPage,
    ProductPage,
    PublicPage,
    SetPage,
    SuccessPage,
    ThinkPage,
    ZiliaoPage,
    SocialdetailPage,
    ReplacePage,
    TodoPage,
    MyReplacePage,
    DelgoodsPage,
    LostdelPage,
    SocialdelPage,
    PartdelPage
  ],
  providers: [
    StatusBar,
    Camera,
    InAppBrowser,
    ImagePicker,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
