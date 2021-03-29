package com.back.apoteka.request;



import lombok.Data;

@Data
public class ScheduleCounselingRequest {

	private String dateAndTime;
	private Long pharmacist;
	private Long pharmacyId;
}
