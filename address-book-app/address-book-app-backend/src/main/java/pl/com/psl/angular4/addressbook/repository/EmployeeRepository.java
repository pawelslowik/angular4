package pl.com.psl.angular4.addressbook.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import pl.com.psl.angular4.addressbook.entity.Employee;

/**
 * Created by psl on 12.10.17
 */
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
}
