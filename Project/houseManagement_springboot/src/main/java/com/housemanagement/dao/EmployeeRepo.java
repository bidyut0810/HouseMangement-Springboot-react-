package com.housemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housemanagement.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

	Employee findByEmployeeId(int employeeId);

	Boolean existsByEmailIdAndEmployeeId(String emailId, int employeeId);

}
