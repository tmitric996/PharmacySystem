package com.back.apoteka.service;

import java.util.List;

import com.back.apoteka.model.Counseling;
import com.back.apoteka.request.ScheduleCounselingRequest;
import com.back.apoteka.response.CanCancelCounselingResponse;

public interface CounselingService {

	List<Counseling> findByPharmacy(Long id);

	List<CanCancelCounselingResponse> getScheduleCounseling();

	boolean schedule(ScheduleCounselingRequest scr);

}
