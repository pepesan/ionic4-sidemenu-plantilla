import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.page.html',
  styleUrls: ['./navegacion.page.scss'],
})
export class NavegacionPage implements OnInit {
  home: string;
  constructor(private router: Router) {
    this.home = '/home';
  }

  ngOnInit() {
  }


  onClick() {
    this.router.navigateByUrl('/home');
  }

    onClickParam() {
      this.router.navigateByUrl('/ruta-parametro/param');
    }
}
