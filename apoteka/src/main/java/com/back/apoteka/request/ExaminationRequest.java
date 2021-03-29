package com.back.apoteka.request;

import java.sql.Timestamp;

import lombok.Data;
// request pri kreiranju unapred definisanih termina pregleda od strane admina apoteke
@Data
public class ExaminationRequest {
	
	private Timestamp dateAndTime;
	
	private Long dermatologist;
	
	private Long pharmacy;
    	
	private double price;
}
