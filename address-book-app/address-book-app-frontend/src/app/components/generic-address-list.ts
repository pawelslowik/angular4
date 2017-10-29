import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pagination } from './pagination/pagination';
import { AddressBookService } from '../services/address-book.service';
import { AddressBookResponse } from '../classes/address-book-response';
import { SearchParameter } from './search-dropdown/search-parameter';

export class GenericAddressList<T extends AddressBookService<AddressBookResponse<any>>> {
    
      entities: any[] = [];
      currentPage: number = 0;
      currentPageSize: number = 0;
      pages: number[];
      totalCount: number = 0;
      error: string;
      searchParameters: SearchParameter[] = [];
    
      constructor(private addressBookService: T) { }
    
      updatePaginationAndLoadPage(pagination: Pagination): void {
        this.currentPage = pagination.getPage();
        this.currentPageSize = pagination.getPageSize();
        this.getEntities(this.currentPage, this.currentPageSize, this.searchParameters);
      }

      updateSearchParameterAndLoadPage(searchParameter: SearchParameter): void {
        this.searchParameters = this.searchParameters
        .filter(param => param.getParameterName() != searchParameter.getParameterName())
        if(searchParameter.getParameterValue().trim().length > 0){
          this.searchParameters.push(searchParameter);
        }
        this.getEntities(this.currentPage, this.currentPageSize, this.searchParameters);
      }

      removeSearchParameterAndLoadPage(searchParameter: SearchParameter): void {
        this.searchParameters = this.searchParameters
        .filter(param => param.getParameterName() != searchParameter.getParameterName())
        this.getEntities(this.currentPage, this.currentPageSize, this.searchParameters);
      }

    
      getEntities(page: number, pageSize: number, searchParamters: SearchParameter[]): void {
        this.addressBookService.getResponse(page, pageSize, searchParamters)
          .subscribe(
            addressBookResponse => {
            this.entities = addressBookResponse.entities;
            this.totalCount = addressBookResponse.totalCount;
            let pagesCount = Math.ceil(addressBookResponse.totalCount / pageSize);
            this.pages = Array(pagesCount).fill(0).map((x, i) => i);
          },
          error => {
            this.error = error;
            this.entities = undefined;
            this.totalCount = 0;
          });
      }
    }