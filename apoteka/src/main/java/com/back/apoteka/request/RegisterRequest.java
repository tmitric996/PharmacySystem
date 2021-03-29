package com.back.apoteka.request;

import lombok.Data;

@Data
public class RegisterRequest {

	  private String email; 
private String password;
private String password_cnfrm;
private String name;
private String surname;
private String address;
private String city;
private String country;
private String phone;
}
