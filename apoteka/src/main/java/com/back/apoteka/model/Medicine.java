package com.back.apoteka.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "medicine")
public class Medicine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; //msm da je id zapravo sifra leka
	
	private String name;
	
	private Integer code; //sifra za sifarnik lekova
	
	private String type;
	
	private String contraindication;
	
	private String components;
	
	private String dailyIntake;
	
	private String replacments; //treba da budu sifre zamenskih lekova
	
	private boolean prescriptioRequired;

}
