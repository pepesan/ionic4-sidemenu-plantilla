import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listado: string[] = [];
  constructor(public router: Router) {
    this.listado = [
        'uno',
        'dos'
    ];
  }

  ngOnInit() {
  }

  salta(item: string) {
    this.router.navigateByUrl('/detalle/' + item);
  }
}
