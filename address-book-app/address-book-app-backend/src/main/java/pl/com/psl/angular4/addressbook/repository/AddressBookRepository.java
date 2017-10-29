package pl.com.psl.angular4.addressbook.repository;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by psl on 27.10.17
 */
@NoRepositoryBean
public interface AddressBookRepository<T> extends PagingAndSortingRepository<T, Long>, QueryDslPredicateExecutor<T> {
}
