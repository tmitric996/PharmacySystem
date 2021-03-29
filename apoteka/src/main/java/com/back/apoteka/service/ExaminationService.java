package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Examination;
import com.back.apoteka.request.ExaminationRequest;
import com.back.apoteka.request.ScheduleExaminationRequest;
import com.back.apoteka.response.CanUnscheduleResponce;

public interface ExaminationService {

	List<Examination> findByPharmacy(Long id);

	List<Examination> findByDermatologist(Long id);

	Examination save(ExaminationRequest examRequst);

	Examination schedule(ScheduleExaminationRequest schedule);

	List<CanUnscheduleResponce> getScheduled();
}
