import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Generated class for the InfinitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infinite',
  templateUrl: 'infinite.html',
})
export class InfinitePage {
  private apiUrl = 'https://reqres.in/api/';
  page = 0;
  data;
  usuarios ;
  perPage;
  totalData;
  totalPage;
  errorMessage;
  constructor(public http: HttpClient) {
    this.getUsers(this.page).subscribe(
      res => {
        console.log(res);

        this.data = res;
        this.usuarios = this.data.data;
        this.perPage = this.data.per_page;
        this.totalData = this.data.total;
        this.totalPage = this.data.total_pages;

      },
      error =>  this.errorMessage = <any>error);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfinitePage');
  }
  getUsers(page) {
    return this.http.get(this.apiUrl+"users?page="+page+"&per_page=10")
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      //const body = error.json() || '';
      //const err = body.error || JSON.stringify(body);
      //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      this.getUsers(this.page)
        .subscribe(
          res => {
            this.data = res;
            this.perPage = this.data.per_page;
            this.totalData = this.data.total;
            this.totalPage = this.data.total_pages;
            for(let i=0; i<this.data.data.length; i++) {
              this.usuarios.push(this.data.data[i]);
            }
          },
          error =>  this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.target.complete();
    }, 1000);
  }
}
