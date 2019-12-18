import { Component, Input } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(public modalController: ModalController, public navParams: NavParams) {
    // No se puede acceder directamente
    // console.log(this.firstName);
    // Debe accederse desde los parámetros de navegación
    console.log(navParams.get('firstName'));
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
