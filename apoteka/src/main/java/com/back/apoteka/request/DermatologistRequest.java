package com.back.apoteka.request;

import lombok.Data;

@Data
public class DermatologistRequest {

	private String email;

	private String password;

	private String firstname;

	private String lastname;
	
	private String address;
	private String city;
	private String state;
	private String phone;
}
