package com.nikki.employeemanager.repository;

import com.nikki.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee deleteEmployeeById(Long id);
}
