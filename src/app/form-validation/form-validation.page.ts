import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AgeValidator} from './age-validator';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.page.html',
  styleUrls: ['./form-validation.page.scss'],
})
export class FormValidationPage implements OnInit {
  myForm;
  submitAttempt = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['',
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required])],
      lastName: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required])],
      age: ['', AgeValidator.isValid]
    });
  }
  save() {
    this.submitAttempt = true;
    if (!this.myForm.valid) {
      console.log('unsuccess!');
    } else {
      console.log('success!');
      console.log(this.myForm.value);
    }

  }

}
