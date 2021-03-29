package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Medicine;
import com.back.apoteka.request.MedicineRequest;
import com.back.apoteka.request.MedicineUpdateRequest;

public interface MedicineService {

	Medicine findById(Long id);
	Medicine findByName(String name);
	List<Medicine> findAll();
	Medicine saveMed(MedicineRequest medicineRequest);
	Medicine updateMed(Long id, MedicineUpdateRequest mur);
	public void deleteMed(Medicine medicine);

}
