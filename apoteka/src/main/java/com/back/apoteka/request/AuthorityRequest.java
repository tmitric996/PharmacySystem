package com.back.apoteka.request;

import com.back.apoteka.model.Authority;

public class AuthorityRequest {
	private Long id;
	private String name;
	
	public AuthorityRequest() {
		
	}
	
	public AuthorityRequest(Authority authority) {
		this(authority.getId(), authority.getName());
	}
	
	public AuthorityRequest(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	
	
	

}
