package com.back.apoteka.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Allergies;
import com.back.apoteka.model.Medicine;
import com.back.apoteka.repository.AllergiesRepository;
import com.back.apoteka.service.AllergiesService;
@Service
public class AllergiesServiceImpl implements AllergiesService{

	@Autowired
	AllergiesRepository allergiesRepo;

	@Autowired
	MedicineServiceImpl medicineService;
	@Override
	public List<Allergies> findByMedicineName(String medicineName) {
		return allergiesRepo.findByMedicineName(medicineName);
	}

	@Override
	public List<Allergies> findByPatientEmail(String patientEmail) {
		return allergiesRepo.findByPatientEmail(patientEmail);
	}

	@Override
	public Allergies save(String medicineName) {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		String email = currentUser.getName();

		Medicine med = (Medicine) medicineService.findByName(medicineName);
	
		if (med!=null) {
			Allergies allergie = new Allergies();
			allergie.setMedicineName(medicineName);
			allergie.setPatientEmail(email);
			return allergiesRepo.save(allergie);
		}
		
		return null;
	}
	
	
}
