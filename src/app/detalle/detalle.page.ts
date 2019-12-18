import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClienteService} from '../lista/cliente.service';
import {Cliente} from '../lista/cliente';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  private id: number;
  private cliente: Cliente = new Cliente();
  constructor(public route: ActivatedRoute, public clienteService: ClienteService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.cliente = this.clienteService.get(this.id);
    });
  }

  ngOnInit() {
  }

}
