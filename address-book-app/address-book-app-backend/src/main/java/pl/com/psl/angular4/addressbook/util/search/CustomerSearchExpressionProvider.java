package pl.com.psl.angular4.addressbook.util.search;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Customer;

/**
 * Created by psl on 28.10.17
 */
@Component
public class CustomerSearchExpressionProvider extends SearchExpressionProvider<Customer> {

    public CustomerSearchExpressionProvider() {
        super(Customer.class, "customer");
    }
}
