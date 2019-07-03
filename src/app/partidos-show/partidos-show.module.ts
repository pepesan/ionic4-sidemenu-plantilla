import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartidosShowPage } from './partidos-show.page';
import {PartidosPageModule} from '../partidos/partidos.module';
import {PartidosModuleModule} from '../partidos-module/partidos-module.module';

const routes: Routes = [
  {
    path: '',
    component: PartidosShowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartidosShowPage]
})
export class PartidosShowPageModule {}
