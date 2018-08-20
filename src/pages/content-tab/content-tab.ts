import { Component } from '@angular/core';
//import { SuperTabs } from 'ionic2-super-tabs';
import { NavController } from 'ionic-angular';
import { JournalsPage } from '../journals/journals';
import { TopicsPage } from '../topics/topics';
import { AuthorsPage } from '../authors/authors';
import { MyFavoritePage } from '../my-favorite/my-favorite';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ContentTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-content-tab',
  templateUrl: 'content-tab.html'
})
export class ContentTabPage {

  journalsRoot = JournalsPage
  topicsRoot = TopicsPage
  authorsRoot = AuthorsPage
  myFavoriteRoot = MyFavoritePage


  constructor(public navCtrl: NavController,public service : ServiceProvider) {}
  

  tabSelected(ev:any){
    this.service.onTabSelect(ev);
  }
}
