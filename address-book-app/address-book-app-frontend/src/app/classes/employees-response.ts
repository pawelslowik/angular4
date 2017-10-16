import { Employee } from './employee';
import { AddressBookResponse } from './address-book-response';

export class EmployeesResponse implements AddressBookResponse<Employee> {
    page: number;
    pageSize: number;
    totalCount: number;
    entities: Employee[];
}