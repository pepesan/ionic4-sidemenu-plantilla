import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartidosService} from '../partidos-module/partidos.service';
import {Partido} from '../partidos-module/partido';

@Component({
  selector: 'app-partidos-show',
  templateUrl: './partidos-show.page.html',
  styleUrls: ['./partidos-show.page.scss'],
})
export class PartidosShowPage implements OnInit {
  nombre;
  listado;
  partido;
  constructor(
      public router: ActivatedRoute,
      public partidosService: PartidosService
      ) {
    // console.log(partidosService);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.nombre = params.nombre;
      // console.log(this.nombre);
      if (this.partidosService.getListado().length === 0) {
        this.partidosService.getData().subscribe(data => {
          // console.log(data);
          this.partidosService.setListado(data);
          this.partido =this.partidosService.buscaPartido(this.nombre);
        });
      } else {
        this.partido = this.partidosService.buscaPartido(this.nombre);
      }
    });
  }

}
