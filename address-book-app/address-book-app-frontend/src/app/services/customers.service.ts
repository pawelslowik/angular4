import { Injectable } from '@angular/core';
import { CustomersResponse } from '../classes/customers-response';
import { HttpClient } from '@angular/common/http';
import { AddressBookService } from './address-book.service';

@Injectable()
export class CustomersService extends AddressBookService<CustomersResponse> {

  constructor(httpClient: HttpClient) { 
    super(httpClient, "customers");
  }
}
