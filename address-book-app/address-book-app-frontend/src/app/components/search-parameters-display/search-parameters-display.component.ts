import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SearchParameter } from '../../classes/search-parameter';

@Component({
  selector: 'search-parameters-display',
  templateUrl: './search-parameters-display.component.html',
  styleUrls: ['./search-parameters-display.component.css']
})
export class SearchParametersDisplayComponent implements OnInit {

  @Input()
  searchParameters: SearchParameter[];
  @Output()
  notifySearchParameterRemoved: EventEmitter<SearchParameter> = new EventEmitter<SearchParameter>();

  constructor() { }

  ngOnInit() {
  }

  onSearchParameterRemoved(searchParameter: SearchParameter): void {
    this.notifySearchParameterRemoved.emit(searchParameter);
  }

}
