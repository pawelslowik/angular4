import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { GenericAddressList } from '../generic-address-list';

@Component({
  selector: 'employee-address-list',
  templateUrl: './employee-address-list.component.html',
  styleUrls: ['./employee-address-list.component.css'],
  providers: [EmployeesService]
})
export class EmployeeAddressListComponent extends GenericAddressList<EmployeesService> {

  constructor(private employeesService: EmployeesService) { 
    super(employeesService);
  }
}
