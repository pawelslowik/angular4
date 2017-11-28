import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { AddressBookResponse } from '../classes/address-book-response';
import { SearchParameter } from './../classes/search-parameter';
import { Pagination } from '../classes/pagination';
import { HttpHeaders } from '@angular/common/http';
import { CurrentUser } from '../classes/current-user';

export class AddressBookService<T extends AddressBookResponse<any>> {

  constructor(private httpClient: HttpClient, private endpoint) { }

  getResponse(pagination: Pagination, searchParameters: SearchParameter[]): Observable<T> {
    let url = "http://localhost:8080/addressbook/" + this.endpoint + "?"
      + this.buildPaginationParametersURL(pagination)
      + this.buildSearchParametersURL(searchParameters);
      let currentUser: CurrentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    return this.httpClient
      .get<T>(url, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + currentUser.token)
      })
      .do(data => console.log("URL=" + url + " returned response=" + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private buildPaginationParametersURL(pagination: Pagination): string {
    return "page=" + pagination.getPage() + "&pageSize=" + pagination.getPageSize();
  }

  private buildSearchParametersURL(searchParameters: SearchParameter[]): string {
    let searchParametersURL = "";
    searchParameters.forEach(
      searchParameter => searchParametersURL += "&" + searchParameter.getParameterName() + "=" + searchParameter.getParameterValue()
    );
    return searchParametersURL;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
