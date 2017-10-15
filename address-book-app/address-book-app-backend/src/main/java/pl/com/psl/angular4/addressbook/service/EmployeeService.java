package pl.com.psl.angular4.addressbook.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.com.psl.angular4.addressbook.entity.Employee;
import pl.com.psl.angular4.addressbook.repository.EmployeeRepository;
import pl.com.psl.angular4.addressbook.util.RandomEmployeeGenerator;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
@Service
public class EmployeeService extends AddressBookService<Employee> {

    private static final Logger LOG = LoggerFactory.getLogger(EmployeeService.class);
    private final RandomEmployeeGenerator randomEmployeeGenerator;

    @Autowired
    EmployeeService(EmployeeRepository repository, RandomEmployeeGenerator randomEmployeeGenerator) {
        super(repository);
        this.randomEmployeeGenerator = randomEmployeeGenerator;
    }

    @PostConstruct
    public void init() {
        LOG.info("Initializing employee data");
        List<Employee> employees = randomEmployeeGenerator.generate(60);
        employees.forEach(repository::save);
        LOG.info("Employee data initialization finished");
    }

    public List<Employee> getEmployees() {
        LOG.info("Getting all employees...");
        List<Employee> employees = super.getEntities();
        LOG.info("Got employees={}", employees);
        return employees;
    }

    public List<Employee> getEmployees(int page, int size) {
        LOG.info("Getting all employees page={} with size={}...", page, size);
        List<Employee> employees = super.getEntities(page, size);
        LOG.info("Got employees={}", employees);
        return employees;
    }

    public long countEmployees() {
        LOG.info("Counting all employees...");
        long count = super.countEntities();
        LOG.info("Counted {} employees", count);
        return count;
    }
}
