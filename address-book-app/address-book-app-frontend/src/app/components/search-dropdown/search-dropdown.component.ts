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
  @Input()
  parameterValueRegex: string = '.*';
  parameterValueValid: boolean = true;
  @Output()
  notifyParameterValueChanged: EventEmitter<SearchParameter> = new EventEmitter<SearchParameter>();

  constructor() { }

  ngOnInit() {
  }

  onParameterValueChanged(): void {
    if(this.parameterValueValid){
      this.notifyParameterValueChanged.emit(new SearchParameter(this.parameterHeader, this.parameterName, this.parameterValue));
      this.parameterValue = '';
    }
  }

  closeDropdown(): void{
    if(this.parameterValueValid){
      $(".dropdown").removeClass("show");
    }
  }

  setParameterValueValid(parameterValueValid: boolean): void {
    this.parameterValueValid = parameterValueValid;
  }
}
