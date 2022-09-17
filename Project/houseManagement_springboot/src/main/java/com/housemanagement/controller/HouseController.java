package com.housemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.housemanagement.model.House;
import com.housemanagement.service.HouseService;

//@CrossOrigin(origins = "*" ,allowedHeaders = "*")
@RestController
public class HouseController {
	
	@Autowired
	HouseService houseService;
	
	@PostMapping("/addHouse")
	public House addHouse(@RequestBody House house) {
		return houseService.addHouse(house);
	}
	
	@PutMapping("editHouse/{houseId}")
	public House editHouse (@PathVariable int houseId ,@RequestBody House house) {  
		return houseService.editHouse(houseId, house);
	}
	
	@PutMapping("houseStatus/{houseId}")
	public House houseStatus (@PathVariable int houseId ,@RequestBody House house) {  
		return houseService.houseStatus(houseId, house);
	}
	@PutMapping("houseStatusOpen/{houseId}")
	public House houseStatusOpen (@PathVariable int houseId ,@RequestBody House house) {  
		return houseService.houseStatusOpen(houseId, house);
	}
	@GetMapping("/findByHouseId/{houseId}")
	public House viewByHouseId(@PathVariable int houseId) {
		return houseService.viewByHouseId(houseId);
	}

	@GetMapping("/viewHouse")
	public List<House> viewHouse() {
		return houseService.viewHouse();
	}
	
	@DeleteMapping("/deleteHouse/{houseId}")
	public String deleteHouse(@PathVariable int houseId) {
		return houseService.deleteHouse(houseId);
	}
}
