package com.housemanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class House {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int houseId;
	private String houseName;
	private String location;
	private String imageUrl;
	private String status;
	private String houseType;
	
	public House(int houseId, String houseName, String location, String imageUrl, String status, String houseType) {
		super();
		this.houseId = houseId;
		this.houseName = houseName;
		this.location = location;
		this.imageUrl = imageUrl;
		this.status = status;
		this.houseType = houseType;
	}
	
	public House() {
	}

	public int getHouseId() {
		return houseId;
	}
	public void setHouseId(int houseId) {
		this.houseId = houseId;
	}
	public String getHouseName() {
		return houseName;
	}
	public void setHouseName(String houseName) {
		this.houseName = houseName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getHouseType() {
		return houseType;
	}
	public void setHouseType(String houseType) {
		this.houseType = houseType;
	}
	
}
