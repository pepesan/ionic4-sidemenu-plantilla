import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ruta-parametro',
  templateUrl: './ruta-parametro.page.html',
  styleUrls: ['./ruta-parametro.page.scss'],
})
export class RutaParametroPage implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

}
