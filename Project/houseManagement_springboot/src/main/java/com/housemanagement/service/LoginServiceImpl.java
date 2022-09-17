package com.housemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housemanagement.dao.LoginRepo;
import com.housemanagement.model.Login;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	LoginRepo loginRepo;

	@Override
	public Login saveUser(Login login) {
		return loginRepo.save(login);
	}

	@Override
	public List<Login> viewUser() {
		return loginRepo.findAll();
	}

	@Override
	public Boolean existsByEmployeeId(String employeeId) {
		return loginRepo.existsByEmployeeId(employeeId);
	}

	@Override
	public Boolean existsByEmployeeIdAndPassword(String employeeId, String password) {
		return loginRepo.existsByEmployeeIdAndPassword(employeeId, password);
	}

}
