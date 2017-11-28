import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListDisplayComponent } from './address-list-display.component';

describe('AddressListDisplayComponent', () => {
  let component: AddressListDisplayComponent;
  let fixture: ComponentFixture<AddressListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
