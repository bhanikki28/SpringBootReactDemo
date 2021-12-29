package com.nikki.employeemanager.controller;

import com.nikki.employeemanager.model.Employee;
import com.nikki.employeemanager.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService empService;

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        System.out.println("Inside Get Employees");
        return empService.getAllEmployees();
        /*
        List<Employee> employeeList = empService.getAllEmployees();
        return new ResponseEntity<>(employeeList,HttpStatus.OK);*/
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee newEmployee = empService.saveEmployee(employee);;
        return new ResponseEntity<>(newEmployee,HttpStatus.CREATED);

    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee employee) {
        Employee empFromDb = empService.getEmployee(Long.valueOf(id));
        empFromDb.setFirstName(employee.getFirstName());
        empFromDb.setEmailAddress(employee.getEmailAddress());
        empFromDb.setEmployeeCode(employee.getEmployeeCode());
        empFromDb.setJobTitle(employee.getJobTitle());
        empFromDb.setPhoneNo(employee.getPhoneNo());
        empFromDb.setLastName(employee.getLastName());
        Employee updatedEmployee = empService.saveEmployee(empFromDb);;
        return new ResponseEntity<>(updatedEmployee,HttpStatus.OK);

    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable String id) {

        return new ResponseEntity<>(empService.getEmployee(Long.valueOf(id)), HttpStatus.OK);

    }

    @DeleteMapping("/employees/{id}")
    public void deleteEmployee(@PathVariable String id) {

        empService.deleteEmployeee(Long.valueOf(id));

    }

}
