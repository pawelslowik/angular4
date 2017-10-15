import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Employee } from '../../classes/employee';
import { EmployeesResponse } from '../../classes/employees-response';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'employee-address-list',
  templateUrl: './employee-address-list.component.html',
  styleUrls: ['./employee-address-list.component.css'],
  providers: [EmployeesService]
})
export class EmployeeAddressListComponent implements OnInit {

  employees: Employee[];
  totalCount: number;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeesService.getEmployees()
    .subscribe(employeesResponse => {
      this.employees = employeesResponse.entities
      this.totalCount = employeesResponse.totalCount;
    });
  }
}
