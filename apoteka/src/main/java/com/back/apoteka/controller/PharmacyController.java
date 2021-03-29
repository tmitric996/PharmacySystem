package com.back.apoteka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.request.AddPhamracyAdminReuest;
import com.back.apoteka.request.AddPharmacyRequest;
import com.back.apoteka.service.impl.PharmacyServiceImpl;

@RestController
@EnableAutoConfiguration
@RequestMapping(value = "/pharmacy")
public class PharmacyController {

	@Autowired
	PharmacyServiceImpl pharmacyService;
	
	@GetMapping()
	public List<Pharmacy> findAll(){
		return pharmacyService.findAll();
	}
	
	@GetMapping("/id")
	public Pharmacy findById(@RequestBody int id){
		return pharmacyService.findById(Long.valueOf(id));
	}
	
	@PostMapping("/name")//hasRole patient
	public Pharmacy findByName(@RequestBody String pharmacyName){
		return pharmacyService.findByName(pharmacyName);
	}
	
	@GetMapping("/pharmacists/{id}")
	public List<User> getPharmacistsFromPharmacy(@PathVariable int id){
		return pharmacyService.getPharmacists(Long.valueOf(id));
	}
	@GetMapping("/havemedicine/{id}")
	public List<Pharmacy> getPharmacyWithMedicine(@PathVariable int id){
		return pharmacyService.getPharmacyWithMedicine(id);
	}
	@PostMapping
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public Pharmacy addPharmacy(@RequestBody AddPharmacyRequest apr) {
		return pharmacyService.addPharmacy(apr);
	}
	@PostMapping("/setadmin")
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public Pharmacy addPharmacyAdmin(@RequestBody AddPhamracyAdminReuest apar) {
		return pharmacyService.addPharmacyAdmin(apar);
	}
	@PostMapping("/setderm")
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public Pharmacy addPharmacyDerm(@RequestBody AddPhamracyAdminReuest apar) {
		return pharmacyService.addPharmacyDerm(apar);
	}
	
}
