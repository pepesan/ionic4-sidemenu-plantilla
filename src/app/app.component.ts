import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Device',
      url: '/device',
      icon: 'desktop'
    },
    {
      title: 'Formulario',
      url: '/form',
      icon: 'desktop'
    }
    ,
    {
      title: 'Geolocation',
      url: '/geo',
      icon: 'desktop'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'desktop'
    },
    {
      title: 'Listado',
      url: '/listado',
      icon: 'desktop'
    },
    {
      title: 'Modal',
      url: '/modal',
      icon: 'desktop'
    },
    {
      title: 'Item Detail',
      url: '/item-detail/detalle',
      icon: 'desktop'
    },
    {
      title: 'Infinite Scroll',
      url: '/infinite',
      icon: 'desktop'
    },
    {
      title: 'Form Validation',
      url: '/form-validation',
      icon: 'desktop'
    },
    {
      title: 'Listado Partidos Rest',
      url: '/partidos',
      icon: 'desktop'
    },
    {
      title: 'Datatable',
      url: '/table',
      icon: 'desktop'
    },
    {
      title: 'Cámara',
      url: '/camara',
      icon: 'desktop'
    },
    {
      title: 'Ejercicio Lista',
      url: '/lista',
      icon: 'desktop'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
