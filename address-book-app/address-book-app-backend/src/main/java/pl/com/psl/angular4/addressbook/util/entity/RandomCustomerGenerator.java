package pl.com.psl.angular4.addressbook.util.entity;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Customer;

import java.util.function.Supplier;

/**
 * Created by psl on 15.10.17
 */
@Component
public class RandomCustomerGenerator extends RandomEntityGenerator<Customer> {

    @Override
    public Supplier<Customer> supplyRandomEntity() {
        return (() -> new Customer(generateEntityId("CUS-"), generateName(), generateAddress(), generatePhoneNumber()));
    }
}
