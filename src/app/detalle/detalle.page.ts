import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  private item: string;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.item = params.nombre;
    });
  }

  ngOnInit() {
  }

}
