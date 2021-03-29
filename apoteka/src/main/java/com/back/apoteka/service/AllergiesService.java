package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Allergies;

public interface AllergiesService {

	Allergies save(String medicineName);
	List<Allergies> findByMedicineName(String medicineName);
	List<Allergies> findByPatientEmail(String patientEmail);
}
