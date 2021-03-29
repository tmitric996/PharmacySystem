package com.back.apoteka.service;

import com.back.apoteka.model.MedicineReservation;
import com.back.apoteka.request.MedicineReservationRequest;

public interface MedicineReservationService {

	

	boolean save(MedicineReservationRequest mrr);

}
