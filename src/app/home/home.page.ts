import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalPage} from '../modal/modal';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

    error(error) {
        console.log('error de carga de imagen' + error);
    }
}
