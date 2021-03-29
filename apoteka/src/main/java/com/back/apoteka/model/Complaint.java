package com.back.apoteka.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "complaint")
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private User patient; //pacijent koji prilaze zalbu
	
	@ManyToOne
	private User staff; //dermatolog ili farmaceut
	
	@ManyToOne
	private Pharmacy pharmacy;
	
	private String message;
	private boolean answered;
	private String answer;

}
