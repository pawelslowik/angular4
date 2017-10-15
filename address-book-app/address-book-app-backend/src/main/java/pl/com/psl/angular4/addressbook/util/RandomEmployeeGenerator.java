package pl.com.psl.angular4.addressbook.util;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Customer;
import pl.com.psl.angular4.addressbook.entity.Employee;

import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by psl on 15.10.17
 */
@Component
public class RandomEmployeeGenerator extends RandomEntityGenerator<Employee> {

    @Override
    public Supplier<Employee> supplyRandomEntity() {
        return (() -> new Employee(generateEntityId("EMP-"), generateName(), generateAddress(), generateAddress(), generatePhoneNumber()));
    }
}
