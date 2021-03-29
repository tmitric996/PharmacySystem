package com.back.apoteka.request;

import lombok.Data;

@Data
public class AddPhamracyAdminReuest {

	private String adminEmail;
	private Long pharmacyId;
}
