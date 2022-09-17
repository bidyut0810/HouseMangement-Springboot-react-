package com.housemanagement.service;

import com.housemanagement.dao.LoginRepo;
import com.housemanagement.model.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private LoginRepo repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Login user = repository.findByEmployeeId(username);
        return new org.springframework.security.core.userdetails.User(user.getEmployeeId(), user.getPassword(), new ArrayList<>());
    }
}