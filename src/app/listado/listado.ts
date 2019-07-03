import { Component } from '@angular/core';
import {Router} from '@angular/router';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {

  items;
  constructor(public router: Router) {
    this.items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man',
      'Super Mario World',
      'Street Fighter II',
      'Half Life',
      'Final Fantasy VII',
      'Star Fox',
      'Tetris',
      'Donkey Kong III',
      'GoldenEye 007',
      'Doom',
      'Fallout',
      'GTA',
      'Halo'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }
  itemSelected(item: string) {
    console.log('Selected Item', item);
    this.router.navigateByUrl('/detail-item/' + item);
    // this.navCtrl.push('item',{ item: item});
  }

}
