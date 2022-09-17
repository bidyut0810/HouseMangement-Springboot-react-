package com.housemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housemanagement.model.House;

@Repository
public interface HouseRepo extends JpaRepository<House, Integer> {
	
	House findByHouseId(int houseId);

}
