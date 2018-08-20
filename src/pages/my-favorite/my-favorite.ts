import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-favorite',
  templateUrl: 'my-favorite.html',
})
export class MyFavoritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoritePage');
  }

}
