package com.housemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housemanagement.dao.HouseRepo;
import com.housemanagement.model.House;

@Service
public class HouseServiceImpl implements HouseService {
	
	@Autowired
	HouseRepo houseRepo;

	@Override
	public List<House> viewHouse() {
		return houseRepo.findAll();
	}

	@Override
	public House addHouse(House house) {
		return houseRepo.save(house);
	}

	@Override
	public House editHouse(int houseId, House house) {
		House house2 = houseRepo.findByHouseId(houseId);
		house2.setHouseName(house.getHouseName());
		house2.setHouseType(house.getHouseType());
		house2.setImageUrl(house.getImageUrl());
		house2.setLocation(house.getLocation());
		house2.setStatus(house.getStatus());
		return houseRepo.save(house2);
	}

	@Override
	public String deleteHouse(int houseId) {
		houseRepo.deleteById(houseId);
		return "Deleted Sucessfully";
	}

	@Override
	public House viewByHouseId(int houseId) {
		return houseRepo.findByHouseId(houseId);
	}

	@Override
	public House houseStatus(int houseId, House house) {
		House house2 = houseRepo.findByHouseId(houseId);
		house2.setStatus("Not Available");
		return houseRepo.save(house2);
	}

	@Override
	public House houseStatusOpen(int houseId, House house) {
		House house2 = houseRepo.findByHouseId(houseId);
		house2.setStatus("Available");
		return houseRepo.save(house2);
	}

}
