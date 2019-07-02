import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GridPage } from './grid';
import {RouterModule, Routes} from '@angular/router';
import {GeolocationPage} from '../geolocation/geolocation';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GridPage
  }
];
@NgModule({
  declarations: [
    GridPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class GridPageModule {}
