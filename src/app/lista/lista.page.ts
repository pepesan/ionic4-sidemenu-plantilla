import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listado: Cliente[] = [];
  constructor(public router: Router, public clienteService: ClienteService) {
    this.listado = this.clienteService.listado;
  }

  ngOnInit() {
  }

  salta(item: Cliente) {
    this.router.navigateByUrl('/detalle/' + item.id);
  }
}
