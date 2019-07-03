import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartidosService} from './partidos.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
      PartidosService
  ]
})
export class PartidosModuleModule { }
