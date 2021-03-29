package com.back.apoteka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServer;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.apoteka.model.Examination;
import com.back.apoteka.model.User;
import com.back.apoteka.request.ExaminationRequest;
import com.back.apoteka.request.ScheduleExaminationRequest;
import com.back.apoteka.response.CanUnscheduleResponce;
import com.back.apoteka.service.impl.ExaminationServiceImpl;
import com.back.apoteka.service.impl.PenaltyServiceImpl;

@RestController
@EnableAutoConfiguration
@RequestMapping(value = "/examination")
public class ExaminationController {
	@Autowired
	ExaminationServiceImpl examinationService;
	@PostMapping
	@PreAuthorize("hasRole('PHARMACY_ADMIN')")
	public Examination createExamination(@RequestBody ExaminationRequest examRequst) {
		return examinationService.save(examRequst);
	}
	//@PreAuthorize("hasRole('PATIENT')")
	@PostMapping("/pharm") //vraca samo slobodne termine za tu apoteku
	public List<Examination> findByPharmacy(@RequestBody int id){
		System.out.println(id);
		return examinationService.findByPharmacy(Long.valueOf(id));
	}

	@PostMapping("/derm") //vraca samo slobodne termine za tog dermatologa
	public List<Examination> findByDermatologist(@RequestBody int id){
		System.out.println(id);
		return examinationService.findByDermatologist(Long.valueOf(id));
	}
	@PreAuthorize("hasRole('DERMATOLOGIST')")
	@GetMapping("/derm") //vraca samo zakazane termine za tog dermatologa
	public List<Examination> scheduleForDermatologist(){
	//	System.out.println(id);
		return examinationService.scheduleForDermatologist();
	}
	@Autowired
	PenaltyServiceImpl penaltyServicel;
	@PreAuthorize("hasRole('DERMATOLOGIST')")
	@PostMapping("/cancel")
	public Examination scheduleExamination(@RequestBody Examination exam) {
		return examinationService.didntShow(exam);
	}
	@PostMapping("/schedule")
	public Examination scheduleExamination(@RequestBody ScheduleExaminationRequest schedule) {
		System.out.println("usao u exam schedule contr");
		return examinationService.schedule(schedule);
	}
	@PostMapping("/unschedule")
	public Examination unscheduleExamination(@RequestBody ScheduleExaminationRequest schedule) {
		System.out.println("usao u exam unschedule contr");
		return examinationService.unschedule(schedule);
	}
	@PostMapping("/canunschedule")
	public boolean canUnschedule(@RequestBody Long id) {
		System.out.println("usao u can exam unschedule contr");
		return examinationService.canUnschedule(id);
	}
	@GetMapping("/schedule")
	public List<CanUnscheduleResponce> scheduledExaminations(){
		System.out.println("usao u getScheudle");
		return examinationService.getScheduled();
	}
	@GetMapping("/history")
	@PreAuthorize("hasRole('PATIENT')")
	public List<Examination> historyOfExaminations(){
		return examinationService.historyOfExaminations();
	}
	@GetMapping("/mypatients")
	@PreAuthorize("hasRole('DERMATOLOGIST')")
	public List<Examination> myPatients(){
		return examinationService.historyOfExaminationsDerm();
	}
	@PostMapping("/finish")
	@PreAuthorize("hasRole('DERMATOLOGIST')")
	public Examination finish(@RequestBody Examination exam){
		return examinationService.finish(exam);
	}
}
