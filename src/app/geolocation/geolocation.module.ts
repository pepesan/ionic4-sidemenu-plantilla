import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GeolocationPage } from './geolocation';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: GeolocationPage
  }
];
@NgModule({
  declarations: [
    GeolocationPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class GeolocationPageModule {}
