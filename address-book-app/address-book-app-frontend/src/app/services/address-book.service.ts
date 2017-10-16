import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { AddressBookResponse } from '../classes/address-book-response';

export class AddressBookService<AddressBookResponse> {

  constructor(private httpClient: HttpClient, private endpoint) { }
  
    getResponse(page: number, pageSize: number): Observable<AddressBookResponse> {
      return this.httpClient
      .get<AddressBookResponse>("http://localhost:8080/addressbook/" + this.endpoint + "?" + "page=" + page + "&pageSize=" + pageSize)
      .do(data => console.log("Received response=" + JSON.stringify(data)))
      .catch(this.handleError);
    }
  
    private handleError(err: HttpErrorResponse){
      console.log(err.message);
      return Observable.throw(err.message);
    }

}
