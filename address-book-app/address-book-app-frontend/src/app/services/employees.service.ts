import { Injectable } from '@angular/core';
import { EmployeesResponse } from '../classes/employees-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeesService {

  constructor(private httpClient:HttpClient) { }

  getEmployees(): Observable<EmployeesResponse>{
    return this.httpClient
    .get<EmployeesResponse>("http://localhost:8080/addressbook/employees")
    .do(data => console.log("Received employees=" + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
