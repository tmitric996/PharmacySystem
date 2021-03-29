package com.back.apoteka.response;

import com.back.apoteka.model.MedicineAmount;

import lombok.Data;

@Data
public class MedicineAmountResponse {

	private MedicineAmount medicineAmount;
	private String message;
}
