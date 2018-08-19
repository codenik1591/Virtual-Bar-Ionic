import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DrinkDataProvider } from '../providers/drink-data/drink-data';
import {GetYourDrinkPage} from "../pages/get-your-drink/get-your-drink";
import {AvailableDrinksPage} from "../pages/available-drinks/available-drinks";
import {SMS} from "@ionic-native/sms";
import {DescriptionModalPage} from "../pages/description-modal/description-modal";
import {QrModalPage} from "../pages/qr-modal/qr-modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GetYourDrinkPage,
    AvailableDrinksPage,
    DescriptionModalPage,
    QrModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GetYourDrinkPage,
    AvailableDrinksPage,
    DescriptionModalPage,
    QrModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DrinkDataProvider,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
