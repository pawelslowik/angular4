import { Employee } from './employee';

export class EmployeesResponse {
    page: number;
    pageSize: number;
    totalCount: number;
    entities: Employee[];
}