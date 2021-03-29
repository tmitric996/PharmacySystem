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

import com.back.apoteka.model.Complaint;
import com.back.apoteka.request.ComplaintRequest;
import com.back.apoteka.service.impl.ComplaintServiceImpl;

@RestController
@EnableAutoConfiguration
@RequestMapping(value = "/complaint")
public class ComplaintController {

	@Autowired
	ComplaintServiceImpl complaintService;
	
	@PostMapping("/forpharmacy")
	@PreAuthorize("hasRole('PATIENT')")
	public Complaint writeComplaintForPharmacy(@RequestBody ComplaintRequest cr) {
		return complaintService.writeComplaintForPharmacy(cr);
	}
	@PostMapping("/forpharmacist")
	@PreAuthorize("hasRole('PATIENT')")
	public Complaint writeComplaintForPharmacist(@RequestBody ComplaintRequest cr) {
		return complaintService.writeComplaintForStaff(cr);
	}
	@PostMapping("/fordermatologist")
	@PreAuthorize("hasRole('PATIENT')")
	public Complaint writeComplaintForDermatologist(@RequestBody ComplaintRequest cr) {
		return complaintService.writeComplaintForStaff(cr);
	}
	@GetMapping
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public List<Complaint> findAll(){
		return complaintService.findAll();
	}
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public Complaint findById(@PathVariable Long id) {
		return complaintService.findById(id);
	}
	@PostMapping()
	@PreAuthorize("hasRole('SYSTEM_ADMIN')")
	public Complaint answer(@RequestBody Complaint comp) {
		return complaintService.answer(comp);
	}
}
