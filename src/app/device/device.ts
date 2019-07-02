import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  constructor(
    private device: Device,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      console.log('Device UUID is: ' + this.device.uuid);
    });
    console.log('ionViewDidLoad DevicePage');
  }

}
