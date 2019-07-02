import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartidosService} from '../partidos-module/partidos.service';

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
    console.log(partidosService);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.nombre = params.nombre;
      console.log(this.nombre);
      this.listado = this.partidosService.getData().subscribe( data => {
        data.forEach( p => {
          if (p.nombre === this.nombre) {
            this.partido = p;
          }
        });
      });
    });
  }

}
