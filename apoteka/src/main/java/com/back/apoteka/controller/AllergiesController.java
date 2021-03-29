package com.back.apoteka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.apoteka.model.Allergies;
import com.back.apoteka.service.impl.AllergiesServiceImpl;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/allergies", produces = MediaType.APPLICATION_JSON_VALUE)
public class AllergiesController {
	
	@Autowired
	AllergiesServiceImpl allergiesService;
	
	@GetMapping("/med")
	@PreAuthorize("hasRole('PATIENT')")
	public List<Allergies> getAllergiesByMed(@RequestBody String medicineName){
		return allergiesService.findByMedicineName(medicineName);
	} 
	
	@GetMapping("/patient")
	@PreAuthorize("hasRole('PATIENT')")
	public List<Allergies> getAllergiesByPatient(){
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		String email = currentUser.getName();
		return allergiesService.findByPatientEmail(email);
	}
	
	@PostMapping("/add")
	@PreAuthorize("hasRole('PATIENT')")
	public Allergies addAllergies(@RequestBody String medicineName) {
		return allergiesService.save(medicineName);
	}

}
