import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchParameter } from '../../classes/search-parameter';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.css']
})
export class SearchDropdownComponent implements OnInit {

  @Input()
  parameterHeader: string;
  @Input()
  parameterName: string;
  parameterValue: string = '';
  @Output()
  notifyParameterValueChanged: EventEmitter<SearchParameter> = new EventEmitter<SearchParameter>();
  inputValid: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onParameterValueChanged(): void {
    this.notifyParameterValueChanged.emit(new SearchParameter(this.parameterHeader, this.parameterName, this.parameterValue));
    this.parameterValue = '';
  }

  closeDropdown(): void{
    $(".dropdown").removeClass("show");
  }
}
