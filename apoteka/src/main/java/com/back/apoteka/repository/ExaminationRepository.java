package com.back.apoteka.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Examination;
import com.back.apoteka.model.User;

public interface ExaminationRepository extends JpaRepository<Examination, Long> {

	List<Examination> findByPatient(User user); // vraca slobodne termine kada se prosledi null
	List<Examination> findByDermatologist(User dermatologist);
}
