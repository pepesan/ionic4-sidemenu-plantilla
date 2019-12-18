import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {PartidosService} from '../partidos-module/partidos.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  rows2 = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'gender' },
    { name: 'company' }
  ];
  temp = [];
  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;

  constructor(public partidosService: PartidosService,
              public alertController: AlertController) {
    this.temp = [...this.rows2];
  }
  ngOnInit() {
    this.partidosService.getData().subscribe( data => {
      this.listado = data;
      this.listadoTemporal = [...this.listado];
        this.columnasListado = [
            { name: 'Nombre' },
            { name: 'Dipu' },
            { name: 'Imagen' }
          ];
      this.columnasListado2 = [
        { name: 'Nombre' },
        { name: 'Dipu' },
        { name: 'Imagen' },
        { name: '', cellTemplate: this.addButton, sortable: false}
      ];
      this.loading = false;
    });
  }
  updateFilter(val: string) {
    console.log(val);
    // filter our data
    const temp = this.temp.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    console.log(temp);

    // update the rows
    this.rows2 = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  @ViewChild(DatatableComponent, { static: true }) table2: DatatableComponent;

  listado;
  listadoTemporal;
  columnasListado = [];
  modelSearch = '';
  loading = true;
  @ViewChild('addButton', { static: true }) addButton: TemplateRef<any>;
 updateFilter2(value: string) {
    // console.log(value);
    // filter our data
    // console.log(this.listadoTemporal);
    const temp = this.listadoTemporal.filter(d => {
      // console.log(d.nombre.toLowerCase().indexOf(value) !== -1);
      return d.nombre.toLowerCase().includes(value.toLowerCase()) || !value;
    });
    // console.log(temp);

    // update the rows
    this.listado = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  async muestraPartido(row) {
    const alert = await this.alertController.create({
      header: 'Partido: ' + row.nombre,
      subHeader: 'Número de Diputados: ' + row.dipu,
      message: '<img src="http://cursosdedesarrollo.com/pactometro/img/' + row.imagen + '"/>',
      buttons: ['OK']
    });

    await alert.present();
  }
  @ViewChild(DatatableComponent, { static: true }) table3: DatatableComponent;
 columnasListado2;
}
