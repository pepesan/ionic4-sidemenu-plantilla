import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  url = 'http://cursosdedesarrollo.com/pactometro/resultados.json';
  listado;
  constructor(public httpClient: HttpClient) {
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
}
