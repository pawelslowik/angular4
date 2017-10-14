package pl.com.psl.angular4.addressbook.controller;

import pl.com.psl.angular4.addressbook.entity.Customer;

import java.util.List;

/**
 * Created by psl on 14.10.17
 */
public class CustomersResponse {

    private int page;
    private int pageSize;
    private long totalCount;
    private List<Customer> customers;

    public CustomersResponse(int page, long totalCount, List<Customer> customers) {
        this.page = page;
        this.pageSize = customers.size();
        this.totalCount = totalCount;
        this.customers = customers;
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

    public List<Customer> getCustomers() {
        return customers;
    }
}
