package com.back.apoteka.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="pharmacy")
public class Pharmacy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String phone;
	
	private String address;
	
	private String description;
	
	@ManyToMany //sklonila fetch type namerno jer sa tim ne radi
    @JoinTable(name = "pharmacy_medicine",
            joinColumns = @JoinColumn(name = "pharmacy_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "medicine_id", referencedColumnName = "id"))
	private List<Medicine> medicines;
	
	@ManyToMany
	@JoinTable(name = "pharmacy_dermatologist",
	joinColumns = @JoinColumn(name = "pharmacy_id", referencedColumnName = "id"),
	inverseJoinColumns =  @JoinColumn(name = "dermatologist_id", referencedColumnName = "id"))
	private List<User> dermatologists;
	
	@OneToMany
	private List<User> pharmacists;
	//ocena?
	//cena savetovanja??
	private double priceForCounseling;
	
	@OneToMany
	private List<User> adminApoteke;
}
