import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {BusPage} from "../pages/bus/bus";
import {TaxiPage} from "../pages/taxi/taxi";
import {ZemidjanPage} from "../pages/zemidjan/zemidjan";
import {ParametrePage} from "../pages/parametre/parametre";
import { HomePage } from '../pages/home/home';
import { CartePage } from '../pages/carte/carte';


import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeocoderProvider } from '../providers/geocoder/geocoder';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BusPage,
    TaxiPage,
    ZemidjanPage,
    ParametrePage,
    CartePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BusPage,
    TaxiPage,
    ZemidjanPage,
    ParametrePage,
    CartePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeocoderProvider,
    NativeGeocoder
  ]
})
export class AppModule {}
