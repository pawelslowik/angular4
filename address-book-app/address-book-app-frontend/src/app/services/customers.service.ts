import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomersResponse } from '../classes/customers-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(page: number, pageSize: number): Observable<CustomersResponse> {
    return this.httpClient
    .get<CustomersResponse>("http://localhost:8080/addressbook/customers?" + "page=" + page + "&pageSize=" + pageSize)
    .do(data => console.log("Received customers=" + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
