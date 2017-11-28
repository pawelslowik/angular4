import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { CurrentUser } from '../classes/current-user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  private subject: Subject<CurrentUser> = new Subject<CurrentUser>();

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

  removeCurrentUser(): void {
    window.localStorage.removeItem("currentUser");
    this.subject.next(null);
  }

  setCurrentUser(currentUser: CurrentUser): void {
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    this.subject.next(currentUser);
  }

  getCurrentUser(): CurrentUser {
    return JSON.parse(window.localStorage.getItem("currentUser"));
  }

  observeCurrentUser(): Observable<CurrentUser> {
    return this.subject.asObservable();
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
