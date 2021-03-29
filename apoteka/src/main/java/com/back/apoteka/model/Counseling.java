package com.back.apoteka.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "counseling")
public class Counseling {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Timestamp dateAndTime;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private User pharmacist;
	
    @ManyToOne(fetch = FetchType.EAGER)
	private Pharmacy pharmacy;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private User patient;
    private boolean didntShow;
    private boolean executed;
    private String report;
}
