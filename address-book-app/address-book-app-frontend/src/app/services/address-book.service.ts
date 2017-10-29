import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { AddressBookResponse } from '../classes/address-book-response';
import { SearchParameter } from '../components/search-dropdown/search-parameter';

export class AddressBookService<T extends AddressBookResponse<any>> {

  constructor(private httpClient: HttpClient, private endpoint) { }
  
    getResponse(page: number, pageSize: number, searchParameters: SearchParameter[]): Observable<T> {
      let url = "http://localhost:8080/addressbook/" + this.endpoint + "?" + "page=" + page + "&pageSize=" + pageSize + this.buildSearchParametersURL(searchParameters); 
      return this.httpClient
      .get<T>(url)
      .do(data => console.log("URL=" + url + " returned response=" + JSON.stringify(data)))
      .catch(this.handleError);
    }

    private buildSearchParametersURL(searchParameters: SearchParameter[]): string {
      let searchParametersURL = ""; 
      searchParameters.forEach(
        searchParameter => searchParametersURL+="&" + searchParameter.getParameterName() + "=" + searchParameter.getParameterValue()
      ); 
      return searchParametersURL;
    }
  
    private handleError(err: HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
    }
}
