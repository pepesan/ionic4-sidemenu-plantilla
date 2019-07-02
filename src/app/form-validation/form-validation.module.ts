import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormValidationPage } from './form-validation.page';
import {AgeValidator} from './age-validator';

const routes: Routes = [
  {
    path: '',
    component: FormValidationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormValidationPage],
  providers: [
      AgeValidator
  ]
})
export class FormValidationPageModule {}
