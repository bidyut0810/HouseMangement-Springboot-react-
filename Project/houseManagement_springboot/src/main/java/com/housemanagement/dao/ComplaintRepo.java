package com.housemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housemanagement.model.Complaint;
import com.housemanagement.model.House;

@Repository
public interface ComplaintRepo extends JpaRepository<Complaint, Integer>{

	Complaint findByComplaintId(int complaintId);

	List<Complaint> findByEmployeeId(int employeeId);

}
