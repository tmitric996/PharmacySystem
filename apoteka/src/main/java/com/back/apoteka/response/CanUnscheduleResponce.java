package com.back.apoteka.response;

import com.back.apoteka.model.Examination;

import lombok.Data;
@Data //can unschedule examination
public class CanUnscheduleResponce {
	private Examination exam;
	private boolean canUnschedule;	
}
