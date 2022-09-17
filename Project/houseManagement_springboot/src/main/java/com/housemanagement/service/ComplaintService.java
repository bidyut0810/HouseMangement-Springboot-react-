package com.housemanagement.service;

import java.util.List;

import com.housemanagement.model.Complaint;
import com.housemanagement.model.House;

public interface ComplaintService {

	List<Complaint> viewAdminComplaint();

	Complaint editComplaint(int complaintId, Complaint complaint);

	List<Complaint> findByEmployeeId(int employeeId);

	Complaint editComplaintDone(int complaintId, Complaint complaint);

	Complaint addComplaint(Complaint complaint);

}
