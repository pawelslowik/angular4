package pl.com.psl.angular4.addressbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.com.psl.angular4.addressbook.entity.Customer;
import pl.com.psl.angular4.addressbook.repository.CustomerRepository;
import pl.com.psl.angular4.addressbook.util.entity.RandomCustomerGenerator;
import pl.com.psl.angular4.addressbook.util.search.CustomerSearchExpressionProvider;
import pl.com.psl.angular4.addressbook.util.search.SearchParameters;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
@Service
public class CustomerService extends AddressBookService<Customer> {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerService.class);
    private final RandomCustomerGenerator randomCustomerGenerator;

    @Autowired
    public CustomerService(CustomerRepository repository, RandomCustomerGenerator randomCustomerGenerator, CustomerSearchExpressionProvider customerSearchExpressionProvider) {
        super(repository, customerSearchExpressionProvider);
        this.randomCustomerGenerator = randomCustomerGenerator;
    }

    @PostConstruct
    public void init() {
        LOG.info("Initializing customer data");
        List<Customer> customers = randomCustomerGenerator.generate(100);
        customers.forEach(repository::save);
        LOG.info("Customer data initialization finished");
    }

    @Override
    public List<Customer> getEntities(SearchParameters searchParameters) {
        LOG.info("Getting customers by search parameters={}...", searchParameters);
        List<Customer> customers = super.getEntities(searchParameters);
        LOG.info("Got customers={}", customers);
        return customers;
    }

    @Override
    public long countEntities(SearchParameters searchParameters) {
        LOG.info("Counting customers by parameters={}...", searchParameters);
        long count = super.countEntities(searchParameters);
        LOG.info("Counted {} customers", count);
        return count;
    }
}
