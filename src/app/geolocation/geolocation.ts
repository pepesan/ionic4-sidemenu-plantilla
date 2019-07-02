import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  position;
  constructor(
    private platform: Platform,
    private geolocation: Geolocation) {
    this.position = {
      lat: '',
      long: ''
    };
    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        this.position.lat = pos.coords.latitude;
        this.position.long = pos.coords.longitude;
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        this.position.lat = pos.coords.latitude;
        this.position.long = pos.coords.longitude;
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

}
