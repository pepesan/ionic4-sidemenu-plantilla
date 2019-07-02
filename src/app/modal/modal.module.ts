import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalPage } from './modal';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];
@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ModalPageModule {}
