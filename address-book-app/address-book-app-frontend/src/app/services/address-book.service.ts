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
import { LoginService } from './login.service';

export class AddressBookService<T extends AddressBookResponse<any>> {

  constructor(private httpClient: HttpClient, private endpoint, private loginService: LoginService) { }

  getResponse(pagination: Pagination, searchParameters: SearchParameter[]): Observable<T> {
    let url = "http://localhost:8080/addressbook/" + this.endpoint + "?"
      + this.buildPaginationParametersURL(pagination)
      + this.buildSearchParametersURL(searchParameters);
    return this.httpClient
      .get<T>(url, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.loginService.getCurrentUser().token)
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
