package com.back.apoteka.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Complaint;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;

public interface ComplaintRepository extends JpaRepository<Complaint, Long>{
	
	public List<Complaint> findByPatient(User patient);
	public List<Complaint> findByStaff(User staff);
	public List<Complaint> findByPharmacy(Pharmacy pharmacy);
	public List<Complaint> findByAnswered(boolean answered);
	

}
