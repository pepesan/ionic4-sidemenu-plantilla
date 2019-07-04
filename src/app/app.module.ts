import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ListadoPageModule} from './listado/listado.module';
import {InfinitePageModule} from './infinite/infinite.module';
import {ModalPageModule} from './modal/modal.module';
import {ItemDetailPageModule} from './item-detail/item-detail.module';
import {HttpClientModule} from '@angular/common/http';
import {FormularioPageModule} from './formulario/formulario.module';
import {GeolocationPageModule} from './geolocation/geolocation.module';
import {DevicePageModule} from './device/device.module';
import {GridPageModule} from './grid/grid.module';
import {PartidosModuleModule} from './partidos-module/partidos-module.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    DevicePageModule,
    GeolocationPageModule,
    GridPageModule,
    ListadoPageModule,
    ItemDetailPageModule,
    FormularioPageModule,
    HttpClientModule,
    InfinitePageModule,
    ModalPageModule,
    PartidosModuleModule
      /*
    ,
    ,
    ,
    ,
    ,
    FormsModule,
    ,
    ,
    ,
    // CameraPageModule,
       */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,
    Geolocation,
    Camera
    /*
    ,
    ,
    ,
    AndroidPermissions

     */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
