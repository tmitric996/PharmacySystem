package com.back.apoteka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Pharmacy;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Long> {
	Pharmacy findByName(String name);
}
