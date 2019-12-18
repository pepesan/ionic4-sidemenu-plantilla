import { Component } from '@angular/core';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  todo;
  todos = [];
  constructor() {
    this.resetTodo();
  }

  resetTodo() {
    this.todo = {
      title : '',
      description: ''
    };
  }
  logForm(myForm) {
    console.log(this.todo);
    this.todos.push(this.todo);
    this.resetTodo();
    myForm.reset();
  }
  itemSelected(item) {
    console.log(item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
