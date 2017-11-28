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
import { LoginComponent } from './components/login/login.component';
import { AddressListDisplayComponent } from './components/address-list-display/address-list-display.component';
import { LoginGuardService } from './services/login-guard.service';
import { LoginService } from './services/login.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddressListComponent,
    EmployeeAddressListComponent,
    CapitalizePipe,
    FormatPhonePipe,
    PaginationComponent,
    SearchDropdownComponent,
    SearchParametersDisplayComponent,
    LoginComponent,
    AddressListDisplayComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'address-list',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'address-list',
        component: AddressListDisplayComponent,
        canActivate: [ LoginGuardService ],
        children: [
          {
            path: '',
            redirectTo: 'address-list',
            pathMatch: 'full'   
          },
          {
            path: 'customers',
            component: CustomerAddressListComponent 
          },
          {
            path: 'employees',
            component: EmployeeAddressListComponent
          }
        ]
      }
    ])
  ],
  providers: [LoginGuardService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
