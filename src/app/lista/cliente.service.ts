import { Injectable } from '@angular/core';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listado: Cliente[] = [];

  constructor() {
    this.listado = [
      new Cliente(1, 'Pepe'),
      new Cliente(2, 'Juan')
    ];
  }
  get(id: number): Cliente {
    for (const cliente of this.listado) {
      console.log(cliente);
      if (cliente.id == id) {
        console.log('encontrado');
        return cliente;
      }
    }
    return new Cliente();
  }
}
