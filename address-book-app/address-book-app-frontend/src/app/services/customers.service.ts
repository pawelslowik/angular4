import { Injectable } from '@angular/core';
import { CustomersResponse } from '../classes/customers-response';
import { HttpClient } from '@angular/common/http';
import { AddressBookService } from './address-book.service';
import { LoginService } from './login.service';

@Injectable()
export class CustomersService extends AddressBookService<CustomersResponse> {

  constructor(httpClient: HttpClient, loginService: LoginService) { 
    super(httpClient, "customers", loginService);
  }
}
