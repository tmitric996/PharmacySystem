package com.back.apoteka.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="medicine_reservation")
public class MedicineReservation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private User patient;
	
	private Timestamp dateAndTime;
	
	@ManyToOne
	private Pharmacy pharmacy;
	
	@ManyToOne
	private Medicine medicine;
	
	private boolean taken;
}
