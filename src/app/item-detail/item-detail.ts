import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item;
  constructor(
      private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.item = params.id;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

}
