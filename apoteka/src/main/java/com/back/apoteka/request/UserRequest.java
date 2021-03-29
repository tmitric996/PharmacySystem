package com.back.apoteka.request;

import com.back.apoteka.model.User;

public class UserRequest {

	private Long id;

	private String email;

	private String password;

	private String firstname;

	private String lastname;
	
	private String address;
	private String city;
	private String state;
	private String phone;
	private AuthorityRequest authority;

	
	public UserRequest() {
		
	}
	
	public UserRequest(User user) {
		id = user.getId();
		email = user.getEmail();
		password = user.getPassword();
		firstname = user.getFirstName();
		lastname = user.getLastName();
		address = user.getHomeAddress();
		city= user.getCity();
		state = user.getState();
		phone = user.getPhoneNumber();
		authority = new AuthorityRequest(user.getAuthority());
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public AuthorityRequest getAuthority() {
		return authority;
	}

	public void setAuthority(AuthorityRequest authority) {
		this.authority = authority;
	}
	
	

}
