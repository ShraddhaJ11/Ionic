import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PersonPage } from '../person/person';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PersonPage;

  constructor(public service : ServiceProvider) {

  }
  tabSelected(ev:any){
    this.service.onTabSelect(ev);
  }

}
