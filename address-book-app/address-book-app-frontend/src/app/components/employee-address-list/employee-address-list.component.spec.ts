import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddressListComponent } from './employee-address-list.component';

describe('EmployeeAddressListComponent', () => {
  let component: EmployeeAddressListComponent;
  let fixture: ComponentFixture<EmployeeAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
