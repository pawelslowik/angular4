import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { GenericAddressList } from '../generic-address-list';

@Component({
  selector: 'customer-address-list',
  templateUrl: './customer-address-list.component.html',
  styleUrls: ['./customer-address-list.component.css'],
  providers: [CustomersService]
})
export class CustomerAddressListComponent extends GenericAddressList<CustomersService> {

  constructor(private customersService: CustomersService) {
    super(customersService);
   }
}
