import { Customer } from './customer';
import { AddressBookResponse } from './address-book-response';

export class CustomersResponse implements AddressBookResponse<Customer> {
    page: number;
    pageSize: number;
    totalCount: number;
    entities: Customer[];
}