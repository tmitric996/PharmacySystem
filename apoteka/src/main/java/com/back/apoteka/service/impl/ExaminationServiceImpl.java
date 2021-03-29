package com.back.apoteka.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Examination;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.repository.ExaminationRepository;
import com.back.apoteka.repository.UserRepository;
import com.back.apoteka.request.ExaminationRequest;
import com.back.apoteka.request.ScheduleExaminationRequest;
import com.back.apoteka.response.CanUnscheduleResponce;
import com.back.apoteka.service.ExaminationService;

@Service
public class ExaminationServiceImpl implements ExaminationService{

	@Autowired
	ExaminationRepository examinationRepo;
	@Autowired
	PharmacyServiceImpl pharmacyService;
	@Autowired
	UserServiceImpl userService;
	@Override
	public List<Examination> findByPharmacy(Long id) {
		Pharmacy pharm = pharmacyService.findById(id);
		System.out.println(pharm);
		List<Examination> list= examinationRepo.findByPatient(null);
		List<Examination> list1= examinationRepo.findByPatient(null);
		for (Examination exam : list) {
			System.out.println(exam);
			if (exam.getPharmacy().getId()!=id) {
				list1.remove(exam);
			}
		}
		return list1;
	}
	
	@Override 
	public List<Examination> findByDermatologist(Long id) {
		List<Examination> list= examinationRepo.findByPatient(null);
		List<Examination> list1= examinationRepo.findByPatient(null);
		for (Examination exam: list) {
			System.out.println(exam);
			if(!exam.getDermatologist().getId().equals(id)) {
				list1.remove(exam);
			}
		}
		return list1;
	}

	@Override
	public Examination save(ExaminationRequest examRequst) {
		Examination exam = new Examination();
		exam.setDateAndTime(examRequst.getDateAndTime());
		exam.setDermatologist(userService.findById(examRequst.getDermatologist()));
		exam.setPatient(null);
		exam.setPharmacy(pharmacyService.findById(examRequst.getPharmacy()));
		exam.setPrice(examRequst.getPrice());
		exam.setDidntShow(false);
		exam.setReport("");
		exam.setExecuted(false);
		return examinationRepo.save(exam);
	}
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	EmailServiceImpl emailService;
	@Override
	public Examination schedule(ScheduleExaminationRequest schedule) {
		System.out.println("usao u examschedule");
		Examination exam = examinationRepo.findById(schedule.getExamId()).orElse(null);
		User patient= userRepo.findByEmail(schedule.getPatientEmail());
		exam.setPatient(patient);
		System.out.println(exam.getPatient());
		System.out.println(exam);
		try {
			emailService.sendExaminationConfirmationMail(patient.getEmail(), patient.getFirstName(), exam.getPharmacy().getName(), exam.getPharmacy().getAddress(), exam.getDateAndTime());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return examinationRepo.save(exam);
	}

	@Autowired
	CustomUserDetailsService customUserService;
	@Override
	public List<CanUnscheduleResponce> getScheduled() {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User u = (User) customUserService.loadUserByUsername(currentUser.getName());
		 
		Date date= new Date();
		long time = date.getTime();
		java.sql.Timestamp currTime = new java.sql.Timestamp(time);
		List<Examination> exams=examinationRepo.findByPatient(u);
		List<Examination> temp = examinationRepo.findByPatient(u);
		List<CanUnscheduleResponce> canUnsch= new ArrayList<CanUnscheduleResponce>();	
		for (Examination e: temp) {
			System.out.println(currTime + " " + e.getDateAndTime());
			if(!(currTime).before(e.getDateAndTime())) {
				exams.remove(e);
			}
			else {
				CanUnscheduleResponce cue = new CanUnscheduleResponce();
				cue.setExam(e);
				cue.setCanUnschedule(canUnschedule(e.getId()));
				System.out.println(cue);
				canUnsch.add(cue);
			}
		}
		return canUnsch;
	}
	public boolean canUnschedule(Long examId) { //proverava da li pregled sa tim idijem moze da se otkaze
		//tj da li do njega ima vise od 24h
		//disejblovati dugme za otkazivanje rezervacije za takve preglede
		Examination exam = examinationRepo.findById(examId).orElse(null);
		Date date1= new Date();
		Date date = new Date(date1.getTime() + 3600*1000*24);
		long time = date.getTime();
		java.sql.Timestamp timeUnschedule = new java.sql.Timestamp(time);
		if (timeUnschedule.before(exam.getDateAndTime())) {
			return true;
		}
		return false;
	}

	public Examination unschedule(ScheduleExaminationRequest schedule) {
		Examination exam = examinationRepo.findById(schedule.getExamId()).orElse(null);
		exam.setPatient(null);
		return examinationRepo.save(exam);
	}

	public List<Examination> historyOfExaminations() {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User u = (User) customUserService.loadUserByUsername(currentUser.getName()); 
		Date date= new Date();
		long time = date.getTime();
		java.sql.Timestamp currTime = new java.sql.Timestamp(time);
		List<Examination> temp=examinationRepo.findByPatient(u);
		
		List<Examination> lista= new ArrayList<Examination>();
		
		for (Examination e : temp) {
			if (currTime.after(e.getDateAndTime())) {
				lista.add(e);
			}
		}
		return lista;
	}

	public List<User> getDermatologistsIMet()//vraca dermatologe sa kojima je imao iskustva
	//da moze da pise zalbe
	{
		List<Examination> examinations = historyOfExaminations();
		System.out.println(examinations.size());
		List<User> dermatologists = new ArrayList<>();
		for (Examination exam: examinations) {
			if (!dermatologists.contains(exam.getDermatologist())) {
				System.out.println("usao u if");
				dermatologists.add(exam.getDermatologist());
			}
		}
		return dermatologists;
	}

	
	
	public List<Examination> historyOfExaminationsDerm() {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User u = (User) customUserService.loadUserByUsername(currentUser.getName()); 
		Date date= new Date();
		long time = date.getTime();
		java.sql.Timestamp currTime = new java.sql.Timestamp(time);
		List<Examination> temp=examinationRepo.findByDermatologist(u);
		
		List<Examination> lista= new ArrayList<Examination>();
		
		for (Examination e : temp) {
			if (currTime.after(e.getDateAndTime())) {
				lista.add(e);
			}
		}
		return lista;
	}

	public List<Examination> scheduleForDermatologist() {

		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User dermatologist = (User) customUserService.loadUserByUsername(currentUser.getName()); 
		List<Examination> lista = examinationRepo.findByDermatologist(dermatologist);
		System.out.println(lista.size());
		List<Examination> exams = new ArrayList<Examination>();
		Date date= new Date();
		long time = date.getTime();
		java.sql.Timestamp currTime = new java.sql.Timestamp(time);
		for(Examination e: lista) {
			if (currTime.before(e.getDateAndTime()) && !e.isDidntShow() && !e.isExecuted()) {
				System.out.println("usao u f");
				exams.add(e);
			}
		}
		return exams;
	}

	@Autowired
	PenaltyServiceImpl penaltyService;
	public Examination didntShow(Examination exam) {
		//exam.setDidntShow(true);
		System.out.println(exam.toString());
		System.out.println(exam.getId());
		User patient = exam.getPatient();
		penaltyService.addPenalty(patient);
		exam.setDidntShow(true);
		return examinationRepo.save(exam);
	}

	public Examination finish(Examination exam) {
		Examination e = examinationRepo.findById(exam.getId()).orElse(null);
		e.setReport(exam.getReport());
		e.setDidntShow(false);
		e.setExecuted(true);
		return examinationRepo.save(e);
	}
}
