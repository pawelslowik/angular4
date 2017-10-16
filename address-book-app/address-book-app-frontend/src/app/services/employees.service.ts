import { Injectable } from '@angular/core';
import { EmployeesResponse } from '../classes/employees-response';
import { HttpClient } from '@angular/common/http';
import { AddressBookService } from './address-book.service';

@Injectable()
export class EmployeesService extends AddressBookService<EmployeesResponse> {

  constructor(httpClient:HttpClient) { 
      super(httpClient, "employees");
  }
}
