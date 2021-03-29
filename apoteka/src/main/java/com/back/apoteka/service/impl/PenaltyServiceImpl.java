package com.back.apoteka.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Penalty;
import com.back.apoteka.model.User;
import com.back.apoteka.repository.PenaltyRepository;
import com.back.apoteka.service.PenaltyService;
@Service
public class PenaltyServiceImpl implements PenaltyService{
	@Autowired
	PenaltyRepository penaltyRepo;
	
	public Penalty addPenalty(User patient) {
		Penalty p = penaltyRepo.findByPatient(patient);
		if (p!= null) {
			p.setNumberOfPenalties(p.getNumberOfPenalties()+1);
		}
		else { p = new Penalty();
		p.setNumberOfPenalties(1);
		p.setPatient(patient);}
		
		return penaltyRepo.save(p);
	}
}
