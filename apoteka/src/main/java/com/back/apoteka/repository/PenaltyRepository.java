package com.back.apoteka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Penalty;
import com.back.apoteka.model.User;

public interface PenaltyRepository extends JpaRepository<Penalty, Long>{
	Penalty findByPatient(User patient);

}
