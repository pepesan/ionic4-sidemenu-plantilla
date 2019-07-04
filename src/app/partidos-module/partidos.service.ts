import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Partido} from './partido';
@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  url = 'https://cursosdedesarrollo.com/pactometro/resultados.json';
  listado: Partido[];
  constructor(public httpClient: HttpClient) {
    console.log('Iniciando Servicio');
    this.listado = [];
  }
  getData() {
    return this.httpClient.get(this.url);
  }
  setListado(listado) {
    this.listado = listado;
  }
  getListado() {
    return this.listado;
  }
  buscaPartido(nombrePartido: string) {
    for ( const p of this.listado) {
      if (p.nombre === nombrePartido) {
        // console.log(p);
        return p;
      }
    }
  }
}
