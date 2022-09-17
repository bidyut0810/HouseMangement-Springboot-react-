package com.housemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housemanagement.dao.ComplaintRepo;
import com.housemanagement.model.Complaint;
import com.housemanagement.model.House;

@Service
public class ComplaintServiceImpl implements ComplaintService {
	
	@Autowired
	ComplaintRepo complaintRepo;

	@Override
	public List<Complaint> viewAdminComplaint() {
		return complaintRepo.findAll();
	}

	@Override
	public Complaint editComplaint(int complaintId, Complaint complaint) {
		Complaint complaint2 = complaintRepo.findByComplaintId(complaintId);
		complaint2.setStatus("Pending");
		return complaintRepo.save(complaint2);
	}

	@Override
	public List<Complaint> findByEmployeeId(int employeeId) {
		return complaintRepo.findByEmployeeId(employeeId);
	}

	@Override
	public Complaint editComplaintDone(int complaintId, Complaint complaint) {
		Complaint complaint2 = complaintRepo.findByComplaintId(complaintId);
		complaint2.setStatus("Completed");
		return complaintRepo.save(complaint2);
	}

	@Override
	public Complaint addComplaint(Complaint complaint) {
		return complaintRepo.save(complaint);
	}

}
