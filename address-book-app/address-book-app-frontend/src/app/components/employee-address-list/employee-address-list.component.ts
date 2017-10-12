import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'employee-address-list',
  templateUrl: './employee-address-list.component.html',
  styleUrls: ['./employee-address-list.component.css'],
  providers: [EmployeesService]
})
export class EmployeeAddressListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeesService.getEmployees().subscribe(employees => this.employees = employees);
  }
}
