import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UploadPage } from '../upload/upload.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected readonly debug = environment.development;
  private readonly CLASS_NAME = 'HomePage';

  constructor(private modalCtrl: ModalController) {
    console.debug(`${this.CLASS_NAME}.constructor()`);
  }

  /** Abre la página para poder subir una nueva publicación */
  presentUpload = async () => {
    console.debug(`${this.CLASS_NAME}.cargarNuevaPublicacion()`);

    const modalUpload = await this.modalCtrl.create({ component: UploadPage });
    modalUpload.present();
  }
}
