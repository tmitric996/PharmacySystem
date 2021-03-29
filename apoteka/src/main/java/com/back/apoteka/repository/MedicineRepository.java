package com.back.apoteka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long>{
	Medicine findByName(String name); 
}
