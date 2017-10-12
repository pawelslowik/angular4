import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerAddressListComponent } from './components/customer-address-list/customer-address-list.component';
import { EmployeeAddressListComponent } from './components/employee-address-list/employee-address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddressListComponent,
    EmployeeAddressListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerAddressListComponent 
      },
      {
        path: 'employees',
        component: EmployeeAddressListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
