package com.back.apoteka.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Medicine;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.repository.PharmacyRepository;
import com.back.apoteka.request.AddPhamracyAdminReuest;
import com.back.apoteka.request.AddPharmacyRequest;
import com.back.apoteka.service.PharmacyService;

@Service
public class PharmacyServiceImpl implements PharmacyService{

	@Autowired
	PharmacyRepository pharmacyRepository;
	@Autowired
	MedicineServiceImpl medicineService;
	@Override
	public Pharmacy findById(Long id) {
		System.out.println("usao u pharmacyservce");
		System.out.println(pharmacyRepository.findById(id));
		return pharmacyRepository.findById(id).orElse(null);
	}

	@Override
	public Pharmacy findByName(String name) {
		return pharmacyRepository.findByName(name);
	}

	@Override
	public List<Pharmacy> findAll() {
		System.out.println("usao u pharmacyservce");
		return pharmacyRepository.findAll();
	}

	@Override
	public List<User> getPharmacists(Long id) {
		Pharmacy p=findById(id);
		List<User> pharmacists= p.getPharmacists();
		return pharmacists;
	}

	public List<Pharmacy> getPharmacyWithMedicine(int id) {
		Medicine m = medicineService.findById(Long.valueOf(id));
		List<Pharmacy> phar = new ArrayList<Pharmacy>();
		List<Pharmacy> temp = findAll();	
		for(Pharmacy p : temp) {
			List<Medicine> meds = p.getMedicines();
			for (Medicine me: meds) {
				if (me.equals(m)) {
					phar.add(p);
				}
			}
		}
		return phar;
	}

	public Pharmacy addPharmacy(AddPharmacyRequest apr) {
		Pharmacy pharm = new Pharmacy();
		pharm.setAddress(apr.getAddress());
		pharm.setDescription(apr.getDescription());
		pharm.setName(apr.getName());
		pharm.setPhone(apr.getPhone());
		return pharmacyRepository.save(pharm);
	}

	@Autowired
	UserServiceImpl userService;
	
	public Pharmacy addPharmacyAdmin(AddPhamracyAdminReuest apar) {
		Pharmacy pharm = pharmacyRepository.findById(apar.getPharmacyId()).orElse(null);
		User pharmAdmin = userService.findByEmail(apar.getAdminEmail());
		pharm.getAdminApoteke().add(pharmAdmin);
		return pharmacyRepository.save(pharm);
	}

	public Pharmacy addPharmacyDerm(AddPhamracyAdminReuest apar) {
		Pharmacy pharm = pharmacyRepository.findById(apar.getPharmacyId()).orElse(null);
		User pharmDerm = userService.findByEmail(apar.getAdminEmail());
		pharm.getDermatologists().add(pharmDerm);
		return pharmacyRepository.save(pharm);
	}

}
