package com.back.apoteka.model;



import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

import java.sql.Timestamp;


@Data
@Entity
@Table(name = "examination")
public class Examination {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Timestamp dateAndTime;
	@ManyToOne(fetch = FetchType.EAGER)
	private User dermatologist;
	
    @ManyToOne(fetch = FetchType.EAGER)
	private Pharmacy pharmacy;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private User patient;
	
    private boolean executed;
    private boolean didntShow;
    private String report;  
	private double price;

}
