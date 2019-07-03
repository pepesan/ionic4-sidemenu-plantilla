import { Component, OnInit } from '@angular/core';
import {PartidosService} from '../partidos-module/partidos.service';
import {Router} from '@angular/router';
import {Partido} from '../partidos-module/partido';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
})
export class PartidosPage implements OnInit {
  listado;
  urlbase = 'http://cursosdedesarrollo.com/pactometro/img/';
  constructor(public partidosService: PartidosService,
              public router: Router) { }

  ngOnInit() {
    this.partidosService.getData().subscribe( data => {
      this.listado = data;
      // console.log(data);
      this.partidosService.setListado(data);
      // console.log(this.partidosService.getListado());
    });

  }

  muestraResultado(p: Partido) {
    // console.log(p);
    this.router.navigateByUrl('/partidos-show/' + p.nombre);
  }
}
