import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Employee } from '../../classes/employee';
import { EmployeesResponse } from '../../classes/employees-response';
import { EmployeesService } from '../../services/employees.service';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'employee-address-list',
  templateUrl: './employee-address-list.component.html',
  styleUrls: ['./employee-address-list.component.css'],
  providers: [EmployeesService]
})
export class EmployeeAddressListComponent {

  employees: Employee[] = [];
  currentPage: number = 0;
  currentPageSize: number = 0;
  pages: number[];
  totalCount: number = 0;
  error: string;

  constructor(private employeesService: EmployeesService) { }

  loadPage(pagination: Pagination): void {
    this.currentPage = pagination.getPage();
    this.currentPageSize = pagination.getPageSize();
    this.getEmployees(this.currentPage, this.currentPageSize);
  }

  getEmployees(page: number, pageSize: number): void {
    this.employeesService.getResponse(page, pageSize)
      .subscribe(
      employeesResponse => {
        this.employees = employeesResponse.entities;
        this.totalCount = employeesResponse.totalCount;
        let pagesCount = Math.ceil(employeesResponse.totalCount / pageSize);
        this.pages = Array(pagesCount).fill(0).map((x, i) => i);
        this.error = undefined;
      },
      error => {
        this.error = error;
        this.employees = undefined;
        this.totalCount = 0;
      });
  }
}
