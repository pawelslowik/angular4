package pl.com.psl.angular4.addressbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.com.psl.angular4.addressbook.entity.Employee;
import pl.com.psl.angular4.addressbook.repository.EmployeeRepository;
import pl.com.psl.angular4.addressbook.util.entity.RandomEmployeeGenerator;
import pl.com.psl.angular4.addressbook.util.search.EmployeeSearchExpressionProvider;
import pl.com.psl.angular4.addressbook.util.search.SearchParameters;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
@Service
public class EmployeeService extends AddressBookService<Employee> {

    private static final Logger LOG = LoggerFactory.getLogger(EmployeeService.class);
    private final RandomEmployeeGenerator randomEmployeeGenerator;

    @Autowired
    EmployeeService(EmployeeRepository repository, RandomEmployeeGenerator randomEmployeeGenerator, EmployeeSearchExpressionProvider employeeSearchExpressionProvider) {
        super(repository, employeeSearchExpressionProvider);
        this.randomEmployeeGenerator = randomEmployeeGenerator;
    }

    @PostConstruct
    public void init() {
        LOG.info("Initializing employee data");
        List<Employee> employees = randomEmployeeGenerator.generate(60);
        employees.forEach(repository::save);
        LOG.info("Employee data initialization finished");
    }

    @Override
    public List<Employee> getEntities(SearchParameters searchParameters) {
        LOG.info("Getting all employees by search parameters={}...", searchParameters);
        List<Employee> employees = super.getEntities(searchParameters);
        LOG.info("Got employees={}", employees);
        return employees;
    }

    @Override
    public long countEntities(SearchParameters searchParameters) {
        LOG.info("Counting employees by search parameters={}...", searchParameters);
        long count = super.countEntities(searchParameters);
        LOG.info("Counted {} employees", count);
        return count;
    }
}
