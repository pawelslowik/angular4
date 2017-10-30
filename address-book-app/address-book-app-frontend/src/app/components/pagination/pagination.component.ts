import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pagination } from '../../classes/pagination';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pageSizes: number[] = [10, 20, 50];
  currentPage: number = 0;
  currentPageSize: number = this.pageSizes[0];
  @Input()
  pages: number[];
  @Output()
  notifyPaginationChanged: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  constructor() { }

  ngOnInit() {
    this.onPaginationChanged();
  }

  onPageChanged(page: number){
    this.currentPage = page;
    this.onPaginationChanged();
  }

  onPageSizeChanged(pageSize: number){
    this.currentPageSize = pageSize;
    this.currentPage = 0;
    this.onPaginationChanged();
  }

  onPaginationChanged(){
    console.log("Pagination changed(" + this.currentPage + ", " + this.currentPageSize + ")")
    this.notifyPaginationChanged.emit(new Pagination(this.currentPage, this.currentPageSize));
  }


}
