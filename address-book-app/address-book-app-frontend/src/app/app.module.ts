import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerAddressListComponent } from './components/customer-address-list/customer-address-list.component';
import { EmployeeAddressListComponent } from './components/employee-address-list/employee-address-list.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { SearchParametersDisplayComponent } from './components/search-parameters-display/search-parameters-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddressListComponent,
    EmployeeAddressListComponent,
    CapitalizePipe,
    FormatPhonePipe,
    PaginationComponent,
    SearchDropdownComponent,
    SearchParametersDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
