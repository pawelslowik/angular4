package pl.com.psl.angular4.addressbook.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by psl on 12.10.17
 */
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long id;
    private String employeeId;
    private String name;
    private String address;
    private String office;
    private String phoneNumber;
    private String email;

    public Employee() {
    }

    public Employee(String employeeId, String name, String address, String office, String phoneNumber) {
        this.employeeId = employeeId;
        this.name = name;
        this.address = address;
        this.office = office;
        this.phoneNumber = phoneNumber;
        this.email = employeeId + "@company.com";
    }

    public Long getId() {
        return id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getOffice() {
        return office;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", employeeId='" + employeeId + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", office='" + office + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
