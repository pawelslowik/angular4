package pl.com.psl.angular4.addressbook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.com.psl.angular4.addressbook.entity.Customer;
import pl.com.psl.angular4.addressbook.entity.Employee;
import pl.com.psl.angular4.addressbook.service.CustomerService;
import pl.com.psl.angular4.addressbook.service.EmployeeService;
import pl.com.psl.angular4.addressbook.util.search.SearchParameters;

import java.util.Map;

/**
 * Created by psl on 12.10.17
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/addressbook")
public class AddressBookController {

    @Autowired
    private CustomerService customerService;
    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(path = "/customers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<AddressBookResponse<Customer>> getCustomers(@RequestParam Map<String, String> params) {
        SearchParameters searchParameters = new SearchParameters(params);
        long totalCount = customerService.countEntities(searchParameters);
        AddressBookResponse<Customer> addressBookResponse =
                new AddressBookResponse<>(searchParameters.hasPaginationParameters() ? searchParameters.getPage() : 0,
                        totalCount,
                        customerService.getEntities(searchParameters));
        return new ResponseEntity<>(addressBookResponse, HttpStatus.OK);
    }

    @RequestMapping(path = "/customers", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<Customer> createCustomer(@RequestBody Customer customer){
        Customer createdCustomer = customerService.createEntity(customer);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED);
    }

    @RequestMapping(path = "/employees", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<AddressBookResponse<Employee>> getEmployees(@RequestParam Map<String, String> params) {
        SearchParameters searchParameters = new SearchParameters(params);
        long totalCount = employeeService.countEntities(searchParameters);
        AddressBookResponse<Employee> addressBookResponse =
                new AddressBookResponse<>(searchParameters.hasPaginationParameters() ? searchParameters.getPage() : 0,
                        totalCount,
                        employeeService.getEntities(searchParameters));
        return new ResponseEntity<>(addressBookResponse, HttpStatus.OK);
    }

    @RequestMapping(path = "/employees", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<Employee> createEmployee(@RequestBody Employee employee){
        Employee createdEmployee = employeeService.createEntity(employee);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }
}
