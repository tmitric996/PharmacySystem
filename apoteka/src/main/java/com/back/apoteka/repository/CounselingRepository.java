package com.back.apoteka.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Counseling;
import com.back.apoteka.model.User;

public interface CounselingRepository extends JpaRepository<Counseling, Long>{

	List<Counseling> findByPatient(User user); // vraca slobodne termine kada se prosledi null
	List<Counseling> findByPharmacist(User pharmacist);
}
