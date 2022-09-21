package com.housemanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employeeId;
	private String name;
	private String emailId;
	private int age;
	private int workingExperience;
	private String address;
	private String designation;
	private int point;
	private int houseId;
	private String houseType;
	private String status;
	
	public Employee() {

	}

	public Employee(int employeeId, String name, String emailId, int age, int workingExperience, String address,
			String designation, int point, int houseId, String houseType, String status) {
		super();
		this.employeeId = employeeId;
		this.name = name;
		this.emailId = emailId;
		this.age = age;
		this.workingExperience = workingExperience;
		this.address = address;
		this.designation = designation;
		this.point = point;
		this.houseId = houseId;
		this.houseType = houseType;
		this.status = status;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getWorkingExperience() {
		return workingExperience;
	}

	public void setWorkingExperience(int workingExperience) {
		this.workingExperience = workingExperience;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}
	public int getHouseId() {
		return houseId;
	}
	public void setHouseId(int houseId) {
		this.houseId = houseId;
	}

	public String getHouseType() {
		return houseType;
	}

	public void setHouseType(String houseType) {
		this.houseType = houseType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
