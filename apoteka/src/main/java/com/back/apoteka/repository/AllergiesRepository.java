package com.back.apoteka.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Allergies;

public interface AllergiesRepository extends JpaRepository<Allergies, Long>{

	
	List<Allergies> findByMedicineName(String medicineName);
	List<Allergies> findByPatientEmail(String patientEmail);

}
