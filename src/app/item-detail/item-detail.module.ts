import { NgModule } from '@angular/core';
import { ItemDetailPage } from './item-detail';
import {RouterModule, Routes} from '@angular/router';
import {GridPage} from '../grid/grid';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: ItemDetailPage
  }
];
@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ItemDetailPageModule {}
