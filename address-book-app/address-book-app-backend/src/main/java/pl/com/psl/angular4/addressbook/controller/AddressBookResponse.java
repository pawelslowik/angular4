package pl.com.psl.angular4.addressbook.controller;

import java.util.List;

/**
 * Created by psl on 14.10.17
 */
public class AddressBookResponse<T> {

    private int page;
    private int pageSize;
    private long totalCount;
    private List<T> entities;

    public AddressBookResponse(int page, long totalCount, List<T> entities) {
        this.page = page;
        this.pageSize = entities.size();
        this.totalCount = totalCount;
        this.entities = entities;
    }

    public int getPage() {
        return page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public long getTotalCount() {
        return totalCount;
    }

    public List<T> getEntities() {
        return entities;
    }
}
