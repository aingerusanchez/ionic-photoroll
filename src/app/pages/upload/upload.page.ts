import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public titulo = '';
  protected debug = environment.development;
  private CLASS_NAME = 'UploadPage';

  constructor(private modalCtrl: ModalController) {
    console.debug(`${this.CLASS_NAME}.constructor()`);
  }

  ngOnInit() { }

  /** Cierra la pantalla modal en primer plano */
  public dismissModal = () => {
    console.debug(`${this.CLASS_NAME}.dismissUploadModal()`);

    this.modalCtrl.dismiss();
  }

  submit() {
    console.log('UploadPage -> submit', this.titulo);

  }

}
