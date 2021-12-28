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

    @PutMapping("/employees/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
        Employee updatedEmployee = empService.saveEmployee(employee);;
        return new ResponseEntity<>(updatedEmployee,HttpStatus.OK);

    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable String id) {

        return new ResponseEntity<>(empService.getEmployee(Long.valueOf(id)), HttpStatus.OK);

    }

    @DeleteMapping("/employee/{id}")
    public void deleteEmployee(@PathVariable String id) {

        empService.deleteEmployeee(Long.valueOf(id));

    }

}
