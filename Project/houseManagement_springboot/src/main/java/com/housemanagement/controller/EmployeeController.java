package com.housemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.housemanagement.model.Employee;
import com.housemanagement.model.House;
import com.housemanagement.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	@PutMapping("editEmployee/{employeeId}")
	public Employee editEmployee (@PathVariable int employeeId ,@RequestBody Employee employee) {  
		return employeeService.editEmployee(employeeId, employee);
	}
	
	@PutMapping("bookHouse/{employeeId}")
	public Employee bookHouse (@PathVariable int employeeId ,@RequestBody Employee employee) {  
		return employeeService.bookHouse(employeeId, employee);
	}
	
	@GetMapping("/findByEmployeeId/{employeeId}")
	public Employee viewByEmployeeId(@PathVariable int employeeId) {
		return employeeService.viewByEmployeeId(employeeId);
	}
	
	@GetMapping("/viewEmployee")
	public List<Employee> viewEmployee() {
		return employeeService.viewEmployee();
	}
	
	@GetMapping("/Signup/{emailId}/{employeeId}")
	public String isUserPresent(@PathVariable String emailId, @PathVariable int employeeId) {
		Boolean bool = employeeService.isUserPresent(emailId, employeeId);
		if(bool)
			return "true";
		else 
			return "false"; 
	}
	
	
	@DeleteMapping("/deleteEmployee/{employeeId}")
	public String deleteEmployee(@PathVariable int employeeId) {
		return employeeService.deleteEmployee(employeeId);
	}
}
