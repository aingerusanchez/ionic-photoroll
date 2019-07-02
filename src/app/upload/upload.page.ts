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
  public titulo: string;

  private CLASS_NAME = 'UploadPage';

  constructor(private modalCtrl: ModalController) {
    console.debug(`${this.CLASS_NAME}.constructor()`);
    this.titulo = '';
  }

  ngOnInit() {
  }

  /** Cierra la pantalla modal en primer plano */
  public dismissModal = () => {
    console.debug(`${this.CLASS_NAME}.dismissUploadModal()`);

    this.modalCtrl.dismiss();
  }

}
