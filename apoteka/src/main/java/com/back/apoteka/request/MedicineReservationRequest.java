package com.back.apoteka.request;

import lombok.Data;
@Data
public class MedicineReservationRequest {

	private Long pharmacyId;
	private Long medicineId;
	private String dateAndTime;
}
