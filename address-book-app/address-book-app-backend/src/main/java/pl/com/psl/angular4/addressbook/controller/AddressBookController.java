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

import java.util.List;

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
    public HttpEntity<CustomersResponse> getCustomers(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer pageSize){
        List<Customer> customers;
        long totalCount = customerService.countCustomers();
        if(page != null && pageSize != null){
            customers = customerService.getCustomers(page, pageSize);
        }
        else{
            customers = customerService.getCustomers();
        }
        CustomersResponse customersResponse = new CustomersResponse(page, totalCount, customers);
        return new ResponseEntity<>(customersResponse, HttpStatus.OK);
    }

    @RequestMapping(path = "/employees", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public HttpEntity<List<Employee>> getEmployees(){
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }
}
