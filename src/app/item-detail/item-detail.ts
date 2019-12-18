import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item;
  constructor(
      private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.item = params.nombre;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

}
