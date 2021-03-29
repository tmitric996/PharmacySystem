package com.back.apoteka.response;

import com.back.apoteka.model.MedicineReservation;

import lombok.Data;

@Data
public class CanCancelReservationResponce {

	private boolean canCancel;
	private MedicineReservation mr;
}
