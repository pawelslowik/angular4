import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchParameter } from './search-parameter';

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

  constructor() { }

  ngOnInit() {
  }

  onParameterValueChanged(): void {
    console.log("emitting parameterName=" + this.parameterName + ", parameterValue=" + this.parameterValue);
    this.notifyParameterValueChanged.emit(new SearchParameter(this.parameterHeader, this.parameterName, this.parameterValue));
    this.parameterValue = '';
  }
}
