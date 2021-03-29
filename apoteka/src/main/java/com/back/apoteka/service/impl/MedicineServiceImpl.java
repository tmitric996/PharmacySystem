package com.back.apoteka.service.impl;

import java.util.List;

import javax.ws.rs.BadRequestException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.apoteka.model.Medicine;
import com.back.apoteka.repository.MedicineRepository;
import com.back.apoteka.request.MedicineRequest;
import com.back.apoteka.request.MedicineUpdateRequest;
import com.back.apoteka.service.MedicineService;


@Service
public class MedicineServiceImpl implements MedicineService{

	@Autowired
	MedicineRepository medicineRepository;
	@Autowired
	PharmacyServiceImpl pharmacyService;
	

	public Medicine findById(Long id) throws AccessDeniedException {
		Medicine m = medicineRepository.findById(id).orElseGet(null);
		return m;
	}

	public Medicine findByName(String name) {
		return medicineRepository.findByName(name);
	}


	public List<Medicine> findAll() {
		return medicineRepository.findAll();
	}
	
	@Override
	public Medicine saveMed(MedicineRequest medicineRequest) {
		
		Medicine m = new Medicine();
		m.setName(medicineRequest.getName());
		m.setCode(medicineRequest.getCode());
		m.setComponents(medicineRequest.getComponents());
		m.setContraindication(medicineRequest.getContraindication());
		m.setDailyIntake(medicineRequest.getDailyIntake());
		m.setPrescriptioRequired(medicineRequest.isPrescriptioRequired());
		m.setReplacments(medicineRequest.getReplacments());
		m.setType(medicineRequest.getType());
		
		return medicineRepository.save(m);
 
		
	}
	
	public Medicine updateMed(Long id, MedicineUpdateRequest mur) {
		Medicine m = findById(id);
		if (m == null) {
			throw new BadRequestException("Medicine cannot be changed if he is deleted or doesn't exist.");
		}
		
		m.setName(mur.getName());
		m = this.medicineRepository.save(m);
		return m;
	}
	
	@Transactional(rollbackFor = Exception.class)
	public void deleteMed(Medicine medicine) {
		medicineRepository.delete(medicine);
	}
	
	

}
