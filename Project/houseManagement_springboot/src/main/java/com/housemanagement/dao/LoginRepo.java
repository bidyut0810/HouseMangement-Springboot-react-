package com.housemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housemanagement.model.Login;

import java.util.Optional;

@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {

	Boolean existsByEmployeeId(String employeeId);
	Login findByEmployeeId(String employeeId);

	Optional<Login> findById(Integer integer);

	Boolean existsByEmployeeIdAndPassword(String employeeId, String password);

}
