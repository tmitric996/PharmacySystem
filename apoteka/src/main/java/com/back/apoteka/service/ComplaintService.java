package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Complaint;
import com.back.apoteka.request.ComplaintRequest;

public interface ComplaintService {


	Complaint writeComplaintForPharmacy(ComplaintRequest cr);

	Complaint writeComplaintForStaff(ComplaintRequest cr);

	List<Complaint> findAll();

	Complaint findById(Long id);

}
