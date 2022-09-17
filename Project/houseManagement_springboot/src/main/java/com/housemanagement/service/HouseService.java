package com.housemanagement.service;

import java.util.List;

import com.housemanagement.model.House;

public interface HouseService {

	List<House> viewHouse();

	House addHouse(House house);

	House editHouse(int houseId, House house);

	String deleteHouse(int houseId);

	House viewByHouseId(int houseId);

	House houseStatus(int houseId, House house);

	House houseStatusOpen(int houseId, House house);

}
