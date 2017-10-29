package pl.com.psl.angular4.addressbook.util.entity;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Employee;

import java.util.function.Supplier;

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
