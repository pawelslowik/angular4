package pl.com.psl.angular4.addressbook.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import pl.com.psl.angular4.addressbook.entity.Customer;

/**
 * Created by psl on 12.10.17
 */
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {
}
