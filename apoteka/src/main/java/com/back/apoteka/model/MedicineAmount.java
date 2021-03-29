package com.back.apoteka.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class MedicineAmount { 
	  
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; 

	@OneToOne
	private Medicine medicine;
	@OneToOne
	private Pharmacy pharmacy;
	
	private double amount;

}
