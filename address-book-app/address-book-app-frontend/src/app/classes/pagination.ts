export class Pagination {

    page: number;
    pageSize: number;

    constructor(page: number, pageSize: number){
        this.page = page;
        this.pageSize = pageSize;
    }

    getPage(): number {
        return this.page;
    }

    getPageSize(): number {
        return this.pageSize;
    }
}