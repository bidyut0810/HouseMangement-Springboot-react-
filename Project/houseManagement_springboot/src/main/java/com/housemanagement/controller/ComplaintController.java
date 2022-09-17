package com.housemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.housemanagement.model.Complaint;
import com.housemanagement.model.House;
import com.housemanagement.service.ComplaintService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ComplaintController {
	
	@Autowired
	ComplaintService complaintService;
	
	@PostMapping("/addComplaint")
	public Complaint addComplaint(@RequestBody Complaint complaint) {
		return complaintService.addComplaint(complaint);
	}
	
	@GetMapping("/viewComplaintAdmin")
	public List<Complaint> viewAdminComplaint() {
		return complaintService.viewAdminComplaint();
	}
	
	@PutMapping("/editComplaint/{complaintId}")
	public Complaint editComplaint(@PathVariable int complaintId, Complaint complaint) {  
		return complaintService.editComplaint(complaintId, complaint);
	}
	@GetMapping("/findByEmployeeIdComplaint/{employeeId}")
	public List<Complaint> findByEmployeeId(@PathVariable int employeeId) {
		return complaintService.findByEmployeeId(employeeId);
	}
	@PutMapping("/editComplaintDone/{complaintId}")
	public Complaint editComplaintDone(@PathVariable int complaintId, Complaint complaint) {  
		return complaintService.editComplaintDone(complaintId, complaint);
	}
}
