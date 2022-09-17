package com.housemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housemanagement.dao.EmployeeRepo;
import com.housemanagement.model.Employee;
import com.housemanagement.model.House;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeRepo employeeRepo;
	
	@Override
	public Employee addEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}

	@Override
	public List<Employee> viewEmployee() {
		return employeeRepo.findAll();
	}

	@Override
	public Employee editEmployee(int employeeId, Employee employee) {
		Employee employee2 = employeeRepo.findByEmployeeId(employeeId);
		employee2.setAddress(employee.getAddress());
		employee2.setAge(employee.getAge());
		employee2.setDesignation(employee.getDesignation());
		employee2.setEmailId(employee.getEmailId());
		employee2.setName(employee.getName());
		employee2.setPoint(employee.getPoint());
		employee2.setWorkingExperience(employee.getWorkingExperience());
		employee2.setStatus(employee.getStatus());
		return employeeRepo.save(employee2);
	}

	@Override
	public Employee viewByEmployeeId(int employeeId) {
		return employeeRepo.findByEmployeeId(employeeId);
	}

	@Override
	public String deleteEmployee(int employeeId) {
		employeeRepo.deleteById(employeeId);
		return "Deleted Employee";
	}

	@Override
	public Boolean isUserPresent(String emailId, int employeeId) {
		return employeeRepo.existsByEmailIdAndEmployeeId(emailId, employeeId);
	}

	@Override
	public Employee bookHouse(int employeeId, Employee employee) {
		Employee employee2 = employeeRepo.findByEmployeeId(employeeId);
		employee2.setHouseType(employee.getHouseType());
		employee2.setHouseId(employee.getHouseId());
		employee2.setStatus(employee.getStatus());
		return employeeRepo.save(employee2);
	}

}
