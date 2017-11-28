import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse<string>> {  
    return this.httpClient
    .post(
      "http://localhost:8080/login",
      '{ "userName" : "' + username + '", "password": "' + password + '" }',
      {
        observe: 'response',
        responseType: 'text' as 'text'
      }
    )
    .catch(this.handleError)
  }

  logout(username: string): void {
    window.localStorage.removeItem("currentUser");  
  }

  getCurrentUser(): string {
    return window.localStorage.getItem("currentUser");
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
