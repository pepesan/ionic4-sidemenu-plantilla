import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartidosService} from './partidos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [
      PartidosService
  ]
})
export class PartidosModuleModule { }
