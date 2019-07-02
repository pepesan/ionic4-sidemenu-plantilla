import { NgModule } from '@angular/core';
import { InfinitePage } from './infinite';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: InfinitePage
  }
];
@NgModule({
  declarations: [
    InfinitePage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class InfinitePageModule {}
