import { Component } from '@angular/core';
import { ContentTabPage } from '../content-tab/content-tab';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {
  ContentPage:any = ContentTabPage;

  constructor() {
   
  }
}