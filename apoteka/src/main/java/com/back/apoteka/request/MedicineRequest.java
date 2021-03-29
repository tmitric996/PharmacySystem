package com.back.apoteka.request;

import lombok.Data;

@Data
public class MedicineRequest {
	
private String name;
	
	private Integer code; //sifra za sifarnik lekova
	
	private String type;
	
	private String contraindication;
	
	private String components;
	
	private String dailyIntake;
	
	private String replacments; //treba da budu sifre zamenskih lekova
	
	private boolean prescriptioRequired;
}
