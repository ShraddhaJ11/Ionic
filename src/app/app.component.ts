import { Component,ViewChild } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootHeader = true; 
  rootPage:any = TabsPage;

  @ViewChild('myNav') nav: NavController
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAboutPage(){
    this.rootHeader = false;
    this.nav.push(ContactPage)
  }

  goBack(){
    this.rootHeader = true;
    this.nav.push(TabsPage)
  }
}
