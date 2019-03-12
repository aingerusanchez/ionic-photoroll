import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public debug = environment.development;

  private CLASS_NAME = 'UploadPage';

  constructor(private modalCtrl: ModalController) {
    console.debug(`${this.CLASS_NAME}.constructor()`);
  }

  ngOnInit() {
  }

  public dismissUploadModal = () => {
    console.debug(`${this.CLASS_NAME}.dismissUploadModal()`);

    this.modalCtrl.dismiss();
  }

}
