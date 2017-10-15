import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Customer } from '../../classes/customer';
import { CustomersResponse } from '../../classes/customers-response';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'customer-address-list',
  templateUrl: './customer-address-list.component.html',
  styleUrls: ['./customer-address-list.component.css'],
  providers: [CustomersService]
})
export class CustomerAddressListComponent implements OnInit {

    pageSizes: number[] = [1, 20, 50];
    customers: Customer[];
    currentPage: number = 0;
    currentPageSize: number = this.pageSizes[0];
    pages: number[];
    totalCount: number;

    constructor(private customersService: CustomersService) { }
  
    ngOnInit() {
      this.getCustomers(this.currentPage, this.currentPageSize);
    }
     
    loadPage(page: number): void {
      this.currentPage = page;
      this.getCustomers(this.currentPage, this.currentPageSize);
    }

    loadPageSize(pageSize: number): void {
      this.currentPageSize = pageSize;
      this.loadPage(0);
    }

    getCustomers(page: number, pageSize: number): void {
      this.customersService.getCustomers(page, pageSize)
      .subscribe(customersResponse => {
        this.customers = customersResponse.entities;
        this.totalCount = customersResponse.totalCount;
        let pagesCount = Math.ceil(customersResponse.totalCount/pageSize);
        this.pages = Array(pagesCount).fill(0).map((x, i) => i);
      });
  }
}
