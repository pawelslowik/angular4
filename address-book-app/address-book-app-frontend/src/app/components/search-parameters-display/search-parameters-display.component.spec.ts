import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParametersDisplayComponent } from './search-parameters-display.component';

describe('SearchParametersDisplayComponent', () => {
  let component: SearchParametersDisplayComponent;
  let fixture: ComponentFixture<SearchParametersDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchParametersDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchParametersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
