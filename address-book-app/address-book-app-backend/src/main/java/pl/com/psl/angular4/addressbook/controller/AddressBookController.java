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
    public HttpEntity<AddressBookResponse<Customer>> getCustomers(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer pageSize) {
        AddressBookResponse<Customer> addressBookResponse;
        long totalCount = customerService.countCustomers();
        if (page != null && pageSize != null) {
            addressBookResponse = new AddressBookResponse<>(page, totalCount, customerService.getCustomers(page, pageSize));
        } else {
            addressBookResponse = new AddressBookResponse<>(0, totalCount, customerService.getCustomers());
        }
        return new ResponseEntity<>(addressBookResponse, HttpStatus.OK);
    }

    @RequestMapping(path = "/employees", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public HttpEntity<AddressBookResponse<Employee>> getEmployees(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer pageSize) {
        AddressBookResponse<Employee> addressBookResponse;
        long totalCount = employeeService.countEmployees();
        if (page != null && pageSize != null) {
            addressBookResponse = new AddressBookResponse<>(page, totalCount, employeeService.getEmployees(page, pageSize));
        } else {
            addressBookResponse = new AddressBookResponse<>(0, totalCount, employeeService.getEmployees());
        }
        return new ResponseEntity<>(addressBookResponse, HttpStatus.OK);
    }
}
