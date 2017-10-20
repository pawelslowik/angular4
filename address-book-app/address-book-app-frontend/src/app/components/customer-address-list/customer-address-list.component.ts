import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Customer } from '../../classes/customer';
import { CustomersResponse } from '../../classes/customers-response';
import { CustomersService } from '../../services/customers.service';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'customer-address-list',
  templateUrl: './customer-address-list.component.html',
  styleUrls: ['./customer-address-list.component.css'],
  providers: [CustomersService]
})
export class CustomerAddressListComponent {

  customers: Customer[] = [];
  currentPage: number = 0;
  currentPageSize: number = 0;
  pages: number[];
  totalCount: number = 0;
  error: string;

  constructor(private customersService: CustomersService) { }

  loadPage(pagination: Pagination): void {
    this.currentPage = pagination.getPage();
    this.currentPageSize = pagination.getPageSize();
    this.getCustomers(this.currentPage, this.currentPageSize);
  }

  getCustomers(page: number, pageSize: number): void {
    this.customersService.getResponse(page, pageSize)
      .subscribe(
      customersResponse => {
        this.customers = customersResponse.entities;
        this.totalCount = customersResponse.totalCount;
        let pagesCount = Math.ceil(customersResponse.totalCount / pageSize);
        this.pages = Array(pagesCount).fill(0).map((x, i) => i);
      },
      error => {
        this.error = error;
        this.customers = undefined;
        this.totalCount = 0;
      });
  }
}
