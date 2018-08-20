import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {PersonPage} from '../pages/person/person';
import { ContentTabPage } from '../pages/content-tab/content-tab';
import { JournalsPage } from '../pages/journals/journals';
import { TopicsPage } from '../pages/topics/topics';
import { AuthorsPage } from '../pages/authors/authors';
import { MyFavoritePage } from '../pages/my-favorite/my-favorite';
import { ServiceProvider } from '../providers/service/service';
import { Calendar } from '@ionic-native/calendar';
import { DatePicker } from '@ionic-native/date-picker';
import { DocumentViewer} from '@ionic-native/document-viewer';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    TabsPage,
    ContentTabPage ,
    JournalsPage,
    TopicsPage,
    AuthorsPage,
    MyFavoritePage
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    TabsPage,
    ContentTabPage ,
    JournalsPage,
    TopicsPage,
    AuthorsPage,
    MyFavoritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Calendar ,
    DatePicker,
    DocumentViewer,
    FileTransfer, 
    File,
    FileTransferObject ,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,

  ]
})
export class AppModule {}
