package com.housemanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int complaintId;
	public int employeeId;
	public int houseId;
	public String complaintType;
	public String complaintDescrption;
	public String status;

	public Complaint() {

	}

	public Complaint(int complaintId, int employeeId, int houseId, String complaintType, String complaintDescrption, String status) {
		super();
		this.complaintId = complaintId;
		this.employeeId = employeeId;
		this.houseId = houseId;
		this.complaintType = complaintType;
		this.complaintDescrption = complaintDescrption;
		this.status = status;
	}
	
	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getHouseId() {
		return houseId;
	}

	public void setHouseId(int houseId) {
		this.houseId = houseId;
	}

	public String getComplaintType() {
		return complaintType;
	}

	public void setComplaintType(String complaintType) {
		this.complaintType = complaintType;
	}

	public String getComplaintDescrption() {
		return complaintDescrption;
	}

	public void setComplaintDescrption(String complaintDescrption) {
		this.complaintDescrption = complaintDescrption;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
