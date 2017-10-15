package pl.com.psl.angular4.addressbook.service;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by psl on 15.10.17
 */
abstract class AddressBookService<T> {

    PagingAndSortingRepository<T, Long> repository;

    AddressBookService(PagingAndSortingRepository<T, Long> repository){
        this.repository = repository;
    }

    List<T> getEntities() {
        Iterable<T> all = repository.findAll();
        List<T> entitiesList = new ArrayList<>();
        all.forEach(entitiesList::add);
        return entitiesList;
    }

    List<T> getEntities(int page, int size) {
        Iterable<T> all = repository.findAll(new PageRequest(page, size));
        List<T> entitiesList = new ArrayList<>();
        all.forEach(entitiesList::add);
        return entitiesList;
    }

    long countEntities() {
        return repository.count();
    }
}
