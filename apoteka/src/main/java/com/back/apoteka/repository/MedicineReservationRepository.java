package com.back.apoteka.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.MedicineReservation;
import com.back.apoteka.model.User;

public interface MedicineReservationRepository extends JpaRepository<MedicineReservation, Long>{

	List<MedicineReservation> findByPatient(User patient);
	List<MedicineReservation> findByPatientAndTaken(User patient, boolean taken);
}
