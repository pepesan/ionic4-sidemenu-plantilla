import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListadoPage } from './listado';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ListadoPage
  }
];
@NgModule({
  declarations: [
    ListadoPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ListadoPageModule {}
