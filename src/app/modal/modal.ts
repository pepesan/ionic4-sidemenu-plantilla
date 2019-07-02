import { Component, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public modalController: ModalController) {
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
