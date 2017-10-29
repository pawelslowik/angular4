package pl.com.psl.angular4.addressbook.service;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.PageRequest;
import pl.com.psl.angular4.addressbook.repository.AddressBookRepository;
import pl.com.psl.angular4.addressbook.util.search.SearchExpressionProvider;
import pl.com.psl.angular4.addressbook.util.search.SearchParameters;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
abstract class AddressBookService<T> {

    AddressBookRepository<T> repository;
    private SearchExpressionProvider<T> searchExpressionProvider;

    AddressBookService(AddressBookRepository<T> repository, SearchExpressionProvider<T> searchExpressionProvider) {
        this.repository = repository;
        this.searchExpressionProvider = searchExpressionProvider;
    }

    public List<T> getEntities(SearchParameters searchParameters) {
        if (searchParameters.hasPaginationParameters()) {
            if (searchParameters.hasEntityParameters()) {
                return getEntities(searchParameters.getPage(),
                        searchParameters.getPageSize(),
                        searchExpressionProvider.createExpression(searchParameters.getEntityParameters()));
            }
            return getEntities(searchParameters.getPage(), searchParameters.getPageSize());

        } else {
            if (searchParameters.hasEntityParameters()) {
                return getEntities(searchExpressionProvider.createExpression(searchParameters.getEntityParameters()));
            }
            return getEntities();
        }
    }

    long countEntities(SearchParameters searchParameters) {
        if (searchParameters.hasEntityParameters()) {
            return repository.count(searchExpressionProvider.createExpression(searchParameters.getEntityParameters()));
        }
        return countEntities();
    }

    private List<T> getEntities() {
        return toEntitiesList(repository.findAll());
    }

    private List<T> getEntities(Predicate predicate) {
        return toEntitiesList(repository.findAll(predicate));
    }

    private List<T> getEntities(int page, int size) {
        return toEntitiesList(repository.findAll(new PageRequest(page, size)));
    }

    private List<T> getEntities(int page, int size, Predicate predicate) {
        return toEntitiesList(repository.findAll(predicate, new PageRequest(page, size)));
    }

    private long countEntities() {
        return repository.count();
    }

    private List<T> toEntitiesList(Iterable<T> entitiesIterable) {
        List<T> entitiesList = new ArrayList<>();
        entitiesIterable.forEach(entitiesList::add);
        return entitiesList;
    }
}
