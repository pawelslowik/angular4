import { Customer } from './customer';

export class CustomersResponse {
    page: number;
    pageSize: number;
    totalCount: number;
    entities: Customer[];
}