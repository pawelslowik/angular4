package pl.com.psl.angular4.addressbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.com.psl.angular4.addressbook.entity.Customer;
import pl.com.psl.angular4.addressbook.repository.CustomerRepository;
import pl.com.psl.angular4.addressbook.util.RandomCustomerGenerator;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
@Service
public class CustomerService extends AddressBookService<Customer>{

    private static final Logger LOG = LoggerFactory.getLogger(CustomerService.class);
    private final RandomCustomerGenerator randomCustomerGenerator;

    @Autowired
    public CustomerService(CustomerRepository repository, RandomCustomerGenerator randomCustomerGenerator) {
        super(repository);
        this.randomCustomerGenerator = randomCustomerGenerator;
    }

    @PostConstruct
    public void init() {
        LOG.info("Initializing customer data");
        List<Customer> customers = randomCustomerGenerator.generate(100);
        customers.forEach(repository::save);
        LOG.info("Customer data initialization finished");
    }

    public List<Customer> getCustomers() {
        LOG.info("Getting all customers...");
        List<Customer> customers = super.getEntities();
        LOG.info("Got customers={}", customers);
        return customers;
    }

    public List<Customer> getCustomers(int page, int size) {
        LOG.info("Getting all customers page={} with size={}...", page, size);
        List<Customer> customers = super.getEntities(page, size);
        LOG.info("Got customers={}", customers);
        return customers;
    }

    public long countCustomers() {
        LOG.info("Counting all customers...");
        long count = super.countEntities();
        LOG.info("Counted {} customers", count);
        return count;
    }
}
