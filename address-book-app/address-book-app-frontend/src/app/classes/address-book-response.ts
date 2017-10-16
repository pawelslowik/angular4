export interface AddressBookResponse<T> {
    page: number;
    pageSize: number;
    totalCount: number;
    entities: T[];
}
