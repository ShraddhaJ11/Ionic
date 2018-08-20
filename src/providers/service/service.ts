//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperTabsController } from 'ionic2-super-tabs';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  index = -1;

  constructor(public superTabsCtrl: SuperTabsController) {}

  slideToIndex(tabIndex) {
   this.superTabsCtrl.slideTo(tabIndex);
  }

  onTabSelect(ev: any) {
    this.index = ev.index;
    // if(this.superTabsCtrl.instances[0].selectedTabIndex === 1 && this.superTabsCtrl.instances[1].selectedTabIndex === 4){
    //   this.slideToIndex(2);
    // }
    // if(this.superTabsCtrl.instances[0].selectedTabIndex === 1 && this.superTabsCtrl.instances[1].selectedTabIndex === 0){
    //   this.slideToIndex(0);
    // }
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
}
