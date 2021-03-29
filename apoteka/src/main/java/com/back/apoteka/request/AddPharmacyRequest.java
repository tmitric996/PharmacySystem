package com.back.apoteka.request;

import lombok.Data;

@Data
public class AddPharmacyRequest {
	private String name;
	
	private String phone;
	
	private String address;
	
	private String description;
}
