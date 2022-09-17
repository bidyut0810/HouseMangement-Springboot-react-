package com.housemanagement.controller;

import java.util.List;

import com.housemanagement.Jwtutil.JwtUtil;
import com.housemanagement.model.AuthRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.housemanagement.model.Login;
import com.housemanagement.service.LoginService;


@RestController
//@CrossOrigin(origins = "*" ,allowedHeaders = "*")
@CrossOrigin("*")
public class LoginController {
	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	LoginService loginService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/addUser")
	public Login saveUser(@RequestBody Login login) {
	    return loginService.saveUser(login);
	}


	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {

//		System.out.println("hh"+authRequest.getEmployeeId()+authRequest.getPassword());

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getEmployeeId(), authRequest.getPassword())
			);
		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		return jwtUtil.generateToken(authRequest.getEmployeeId());
	}


	@GetMapping("/checkEmployeeId/{employeeId}")
	public String emailValidation(@PathVariable String employeeId) {
		Boolean bool = loginService.existsByEmployeeId(employeeId);
		if(bool)
			return "true";
		else 
			return "false";  
    }

	@GetMapping("/login/{employeeId}/{password}")
	public String emailValidation(@PathVariable String employeeId, @PathVariable String password) {
		Boolean bool = loginService.existsByEmployeeIdAndPassword(employeeId, password);
		if(bool)
			return "true";
		else 
			return "false";  
    }
	
	@GetMapping("/viewUser")
	public List<Login> viewUser() {
	    return loginService.viewUser();
	}

}
