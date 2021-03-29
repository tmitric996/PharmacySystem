package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;

public interface PharmacyService {

	Pharmacy findById(Long id);
	Pharmacy findByName(String name);
	List<Pharmacy> findAll();
	List<User> getPharmacists(Long valueOf);
}
