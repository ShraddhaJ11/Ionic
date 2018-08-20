import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Calendar } from '@ionic-native/calendar';
import { DatePicker } from '@ionic-native/date-picker';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showForm = false;
  startDate
  endDate
  constructor(private socialSharing: SocialSharing,private calendar : Calendar,private datePicker: DatePicker,private document: DocumentViewer, private transfer: FileTransfer,private file: File) {

  }

 
  
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf';
    const options: DocumentViewerOptions = {
      title: 'My PDF',
      openWith :	{ enabled:true }
    }
    fileTransfer.download(url, this.file.externalDataDirectory + 'pdf-sample.pdf',true).then((entry) => {
      let newUrl = entry.toURL();
      this.document.viewDocument(newUrl, 'application/pdf', options);
    }, (error) => {
      // handle error
    });
  }

  openEventForm(){
    this.showForm = !this.showForm;
  }

  selectStartDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date | time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.startDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  
  selectEndDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date | time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.endDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }



  submitForm(title,location,notes){
    this.openEventForm();
    this.calendar.createEvent(title.value,location.value,notes.value,this.startDate,this.endDate);
  }

  shareVia(){
    this.socialSharing.share("Message from ionic", null, null, null);
  }
}
