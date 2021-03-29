package com.back.apoteka.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.apoteka.model.Medicine;
import com.back.apoteka.model.MedicineAmount;
import com.back.apoteka.model.Pharmacy;

public interface MedicineAmountRepository extends JpaRepository<MedicineAmount, Long> {

	List<MedicineAmount> findByMedicine(Medicine medicine);
	List<MedicineAmount> findByPharmacy(Pharmacy pharmacy);
	MedicineAmount findByPharmacyAndMedicine(Pharmacy pharmacy, Medicine medicine);
}
