package pl.com.psl.angular4.addressbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Customer;
import pl.com.psl.angular4.addressbook.entity.Employee;
import pl.com.psl.angular4.addressbook.repository.CustomerRepository;
import pl.com.psl.angular4.addressbook.repository.EmployeeRepository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by psl on 12.10.17
 */
@Component
public class AddressBookService {

    private static final Logger LOG = LoggerFactory.getLogger(AddressBookService.class);

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostConstruct
    public void init(){
        LOG.info("Initializing DB");
        List<Customer> customers = Arrays.asList(
                new Customer("bob", "wroclaw", "111 111 111"),
                new Customer("tom", "warsaw", "222 222 222")
        );
        customers.forEach(customerRepository::save);

        List<Employee> employees = Arrays.asList(new Employee("max", "gdansk", "warsaw office", "333 333 333", "max@company.com"));
        employees.forEach(employeeRepository::save);

        LOG.info("DB initialization finished");
    }

    public List<Customer> getCustomers(){
        LOG.info("Getting all customers...");
        Iterable<Customer> all = customerRepository.findAll();
        List<Customer> customers = new ArrayList<>();
        all.forEach(customers::add);
        LOG.info("Got customers={}", customers);
        return customers;
    }

    public List<Employee> getEmployees(){
        LOG.info("Getting all employees...");
        Iterable<Employee> all = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();
        all.forEach(employees::add);
        LOG.info("Got employees={}", employees);
        return employees;
    }
}
