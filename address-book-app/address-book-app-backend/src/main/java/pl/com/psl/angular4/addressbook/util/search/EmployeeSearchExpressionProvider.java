package pl.com.psl.angular4.addressbook.util.search;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Employee;

/**
 * Created by psl on 28.10.17
 */
@Component
public class EmployeeSearchExpressionProvider extends SearchExpressionProvider<Employee> {

    public EmployeeSearchExpressionProvider() {
        super(Employee.class, "employee");
    }
}
