import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
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

  pageSizes: number[] = [10, 20, 50];
  employees: Employee[];
  currentPage: number = 0;
  currentPageSize: number = this.pageSizes[0];
  pages: number[];
  totalCount: number;
  error: string;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees(this.currentPage, this.currentPageSize);
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.getEmployees(this.currentPage, this.currentPageSize);
  }

  loadPageSize(pageSize: number): void {
    this.currentPageSize = pageSize;
    this.loadPage(0);
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
      }
      );
  }
}
