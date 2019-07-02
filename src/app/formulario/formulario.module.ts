import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormularioPage } from './formulario';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FormularioPage
  }
];
@NgModule({
  declarations: [
    FormularioPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class FormularioPageModule {}
