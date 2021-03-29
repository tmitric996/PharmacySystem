package com.back.apoteka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.apoteka.model.Counseling;
import com.back.apoteka.model.Examination;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.request.ScheduleCounselingRequest;
import com.back.apoteka.request.ScheduleExaminationRequest;
import com.back.apoteka.response.CanCancelCounselingResponse;
import com.back.apoteka.service.impl.CounselingServiceImpl;
import com.back.apoteka.service.impl.ExaminationServiceImpl;
import com.back.apoteka.service.impl.PenaltyServiceImpl;

@RestController
@EnableAutoConfiguration
@RequestMapping(value = "/counseling")
public class CounselingController {

	@Autowired
	CounselingServiceImpl counselingService;
	@Autowired 
	ExaminationServiceImpl examService;
	@GetMapping("/schedule")
	public List<CanCancelCounselingResponse> scheduledCounselings(){
		System.out.println("usao u getScheudle");
		return counselingService.getScheduleCounseling();
	}
	@GetMapping("/history")
	@PreAuthorize("hasRole('PATIENT')")
	public List<Counseling> historyOfCounseling(){
		return counselingService.historyOfCounseling();
	}
	@PostMapping("/finish")
	@PreAuthorize("hasRole('PHARMACIST')")
	public Counseling finish(@RequestBody Counseling exam){
		return counselingService.finish(exam);
	}
	@PostMapping("/schedulecoun")
	@PreAuthorize("hasRole('PHARMACIST')")
	public Counseling scheCoun(@RequestBody ScheduleExaminationRequest ser) {
		return counselingService.scheduleCoun(ser);
	}
	@PreAuthorize("hasRole('PHARMACIST')")
	@GetMapping("/pharm") //vraca samo zakazane termine za tog dermatologa
	public List<Counseling> scheduleForPharmacist(){
	//	System.out.println(id);
		return counselingService.scheduleForPharmacistt();
	}
	@Autowired
	PenaltyServiceImpl penaltyServicel;
	@PreAuthorize("hasRole('PHARMACIST')")
	@PostMapping("/cancel")
	public Counseling scheduleExamination(@RequestBody Counseling exam) {
		return counselingService.didntShow(exam);
	}
	@PostMapping("/schedule")
	public boolean schedule(@RequestBody ScheduleCounselingRequest scr) {
		return counselingService.schedule(scr);
	}
	@PostMapping("/unschedule")
	public Counseling unscheduleExamination(@RequestBody ScheduleExaminationRequest schedule) {
		System.out.println("usao u coun unschedule contr");
		return counselingService.unschedule(schedule);
	}
	
	@GetMapping("/pharmacistsimet")
	@PreAuthorize("hasRole('PATIENT')")
	public List<User> pharmacistsIMet(){
		return counselingService.getPharmacistsIMet();
	}
	@GetMapping("/dermatologistsimet")
	@PreAuthorize("hasRole('PATIENT')")
	public List<User> demratologistsIMet(){
		return examService.getDermatologistsIMet();
	}
	@GetMapping("/pharmacysbeen")
	@PreAuthorize("hasRole('PATIENT')")
	public List<Pharmacy> pharmacysIBeen(){
		return counselingService.getPharmacyIBeen();
	}
	@GetMapping("/mypatients")
	@PreAuthorize("hasRole('PHARMACIST')")
	public List<Counseling> myPatients(){
		return counselingService.historyOfCounselingsPharm();
	}
}
