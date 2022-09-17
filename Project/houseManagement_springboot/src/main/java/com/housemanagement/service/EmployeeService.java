package com.housemanagement.service;

import java.util.List;

import com.housemanagement.model.Employee;
import com.housemanagement.model.House;
import com.housemanagement.model.Login;

public interface EmployeeService {

	Employee addEmployee(Employee employee);

	List<Employee> viewEmployee();

	Employee editEmployee(int employeeId, Employee employee);

	Employee viewByEmployeeId(int employeeId);

	String deleteEmployee(int employeeId);

	Boolean isUserPresent(String emailId, int employeeId);

	Employee bookHouse(int employeeId, Employee employee);

}
