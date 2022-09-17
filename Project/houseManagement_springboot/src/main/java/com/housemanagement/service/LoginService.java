package com.housemanagement.service;

import java.util.List;

import com.housemanagement.model.Login;

public interface LoginService {

	Login saveUser(Login login);

	List<Login> viewUser();

	Boolean existsByEmployeeId(String employeeId);

	Boolean existsByEmployeeIdAndPassword(String employeeId, String password);

}
