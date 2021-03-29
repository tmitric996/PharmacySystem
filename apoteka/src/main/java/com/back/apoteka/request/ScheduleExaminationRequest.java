package com.back.apoteka.request;

import lombok.Data;

@Data
public class ScheduleExaminationRequest {

	public Long examId;
	public String patientEmail;
}
