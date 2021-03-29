package com.back.apoteka.response;

import com.back.apoteka.model.Counseling;

import lombok.Data;
@Data
public class CanCancelCounselingResponse {
	Counseling counseling;
	boolean canCancel;

}
