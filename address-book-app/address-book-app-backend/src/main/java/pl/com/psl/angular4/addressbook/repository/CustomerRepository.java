package pl.com.psl.angular4.addressbook.repository;

import org.springframework.stereotype.Repository;
import pl.com.psl.angular4.addressbook.entity.Customer;

/**
 * Created by psl on 12.10.17
 */
@Repository
public interface CustomerRepository extends AddressBookRepository<Customer> {
}
