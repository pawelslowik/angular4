import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Customer } from '../../classes/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'customer-address-list',
  templateUrl: './customer-address-list.component.html',
  styleUrls: ['./customer-address-list.component.css'],
  providers: [CustomersService]
})
export class CustomerAddressListComponent implements OnInit {
  
    customers: Customer[];

    constructor(private customersService: CustomersService) { }
  
    ngOnInit() {
      this.getCustomers();
    }
  
    getCustomers(): void {
        this.customersService.getCustomers().subscribe(customers => this.customers = customers);
    }  
}
