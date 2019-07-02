import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartidosPage } from './partidos.page';
import {PartidosService} from '../partidos-module/partidos.service';
import {HttpClientModule} from '@angular/common/http';
import {PartidosModuleModule} from '../partidos-module/partidos-module.module';

const routes: Routes = [
  {
    path: '',
    component: PartidosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PartidosModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartidosPage],
  providers: [
      PartidosService
  ]
})
export class PartidosPageModule {}
