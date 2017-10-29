package pl.com.psl.angular4.addressbook.repository;

import org.springframework.stereotype.Repository;
import pl.com.psl.angular4.addressbook.entity.Employee;

/**
 * Created by psl on 12.10.17
 */
@Repository
public interface EmployeeRepository extends AddressBookRepository<Employee> {
}
