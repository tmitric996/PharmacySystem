package com.back.apoteka.service.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.back.apoteka.model.Allergies;
import com.back.apoteka.model.Counseling;
import com.back.apoteka.model.Examination;
import com.back.apoteka.model.Medicine;
import com.back.apoteka.model.MedicineAmount;
import com.back.apoteka.model.MedicineReservation;
import com.back.apoteka.model.Pharmacy;
import com.back.apoteka.model.User;
import com.back.apoteka.repository.MedicineAmountRepository;
import com.back.apoteka.repository.MedicineReservationRepository;
import com.back.apoteka.request.MedicineReservationRequest;
import com.back.apoteka.request.ScheduleExaminationRequest;
import com.back.apoteka.response.CanCancelReservationResponce;
import com.back.apoteka.response.MedicineAmountResponse;
import com.back.apoteka.service.MedicineReservationService;
@Service
public class MedicineReservationServiceImpl implements MedicineReservationService {

	@Autowired
	MedicineReservationRepository medicineReservationRepo;
	@Autowired
	MedicineServiceImpl medicineService;
	@Autowired
	PharmacyServiceImpl pharmacyService;
	@Autowired
	EmailServiceImpl emailService;
	@Autowired
	CustomUserDetailsService customUserService;
	@Override
	public boolean save(MedicineReservationRequest mrr) {
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User patient = (User) customUserService.loadUserByUsername(currentUser.getName());
		MedicineReservation mr= new MedicineReservation();
		Medicine medicine = medicineService.findById(mrr.getMedicineId());
		Pharmacy pharmacy = pharmacyService.findById(mrr.getPharmacyId());
		mr.setDateAndTime(Timestamp.valueOf(mrr.getDateAndTime()));
		mr.setMedicine(medicine);
		mr.setPatient(patient);
		mr.setPharmacy(pharmacy);
		mr.setTaken(false);
		System.out.println("cua rez");
		medicineReservationRepo.save(mr);
		try {
			emailService.sendMedicineReservationConfirmation(patient.getEmail(), patient.getFirstName(), mr.getId(), mr.getDateAndTime());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
	}

	public List<CanCancelReservationResponce> getReservations(){//proveri
		Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
		User patient = (User) customUserService.loadUserByUsername(currentUser.getName());
		Date date= new Date();
		long time = date.getTime();
		java.sql.Timestamp currTime = new java.sql.Timestamp(time);
		List<CanCancelReservationResponce> responce= new ArrayList<CanCancelReservationResponce>();
		List<MedicineReservation> reservations = medicineReservationRepo.findAll();
		List<MedicineReservation> temp = medicineReservationRepo.findAll();
		for(MedicineReservation mr: temp) {
			if (!mr.getPatient().equals(patient) || !(currTime).before(mr.getDateAndTime()) || mr.isTaken()) {
				reservations.remove(mr);
			}
			else {
				CanCancelReservationResponce ccrr= new CanCancelReservationResponce();
				System.out.println(mr.isTaken()); // mora biti false ako ovde ulazi
				ccrr.setMr(mr);
				ccrr.setCanCancel(canCancel(mr.getId()));
				responce.add(ccrr);
			}
		}
	
		return responce;
	}
	
	public boolean canCancel(Long id){
		Date date1= new Date();
		Date date = new Date(date1.getTime() + 3600*1000*24);
		long time = date.getTime();
		java.sql.Timestamp timeUnschedule = new java.sql.Timestamp(time);
		MedicineReservation mr= medicineReservationRepo.findById(id).orElse(null);
		if (timeUnschedule.before(mr.getDateAndTime())) {
			return true;
		}
		return false;
	}
	public boolean cancel(ScheduleExaminationRequest schedule) {
		MedicineReservation mr = medicineReservationRepo.findById(schedule.getExamId()).orElse(null);
		mr.setPatient(null);
		medicineReservationRepo.delete(mr);
		return true;
	}

	@Autowired
	MedicineAmountRepository medicineAmpountRepo;
	public boolean takeMedicine(Long id) {
		System.out.println("usao u takitmedcine service");
		MedicineReservation mr = medicineReservationRepo.findById(id).orElse(null);
		mr.setTaken(true);
		medicineReservationRepo.save(mr);
		return true;
		
	}
	@Autowired
	AllergiesServiceImpl allergiesService;
	public MedicineAmountResponse tryReservation(Long idMed, Examination exam) {
		System.out.println(idMed +" "+ exam);
		MedicineAmountResponse mar=new MedicineAmountResponse();
		Medicine medicine = medicineService.findById(idMed);
		boolean dontExist= false;
		for (Allergies a : allergiesService.findByPatientEmail(exam.getPatient().getEmail())) {
			if (medicine.getName().equals(a.getMedicineName())) {
				System.out.println("usao u if da je alergican");
				
				mar.setMedicineAmount(null);
				mar.setMessage("Patient is allergic to this medicine!");
				return mar;
			}
		}
		List<MedicineAmount> list = medicineAmpountRepo.findByPharmacy(exam.getPharmacy());
		System.out.println(list);
		if (list.isEmpty())// || nema na stanju)
	 {
			// salje poruku adminu apoteke da nema na stanju leka!
			System.out.println("usao u if da nema leka 1");
			mar.setMedicineAmount(null);
			mar.setMessage("Medicine is not avaiable right now");
			return mar;
		}
		for (MedicineAmount ma: list) {
			if (ma.getMedicine().equals(medicine) && ma.getAmount()<1) {
				// salje poruku adminu apoteke da nema na stanju leka!
				System.out.println("usao u if da nema leka 2");
				mar.setMedicineAmount(null);
				mar.setMessage("Medicine is not avaiable right now");
				return mar;	

			}
			dontExist=true;
		}
		if (dontExist==true) {
			mar.setMedicineAmount(null);
			mar.setMessage("Medicine is not avaiable right now");
			return mar;	

		}
		MedicineAmount medAm= medicineAmpountRepo.findByPharmacyAndMedicine(exam.getPharmacy(), medicine);
		medAm.setAmount(medAm.getAmount()-1);
		medicineAmpountRepo.save(medAm);
		MedicineReservation mr = new MedicineReservation();
		mr.setMedicine(medicine);
		mr.setPatient(exam.getPatient());
		mr.setPharmacy(exam.getPharmacy());
		mr.setTaken(false);
		Date date1= new Date();
		Date date = new Date(date1.getTime() + 3600*1000*24*7);
		long time = date.getTime();
		java.sql.Timestamp timeRes = new java.sql.Timestamp(time);
		mr.setDateAndTime(timeRes);
		medicineReservationRepo.save(mr);
		// smanji amount za jedan
		// napravi rezervaciju pacijentu za lek
		mar.setMedicineAmount(medAm);
		mar.setMessage("Reserved");
		System.out.println("rezervisao ek");
		return mar;
		//treba resiti responce
	}

	public MedicineAmountResponse tryReservationPharmacist(Long idMed, Counseling exam) {
		MedicineAmountResponse mar=new MedicineAmountResponse();
		Medicine medicine = medicineService.findById(idMed);
		boolean dontExist= false;
		for (Allergies a : allergiesService.findByPatientEmail(exam.getPatient().getEmail())) {
			if (medicine.getName().equals(a.getMedicineName())) {
				System.out.println("usao u if da je alergican");
				
				mar.setMedicineAmount(null);
				mar.setMessage("Patient is allergic to this medicine!");
				return mar;
			}
		}
		List<MedicineAmount> list = medicineAmpountRepo.findByPharmacy(exam.getPharmacy());
		System.out.println(list);
		if (list.isEmpty())// || nema na stanju)
	 {
			// salje poruku adminu apoteke da nema na stanju leka!
			System.out.println("usao u if da nema leka 1");
			mar.setMedicineAmount(null);
			mar.setMessage("Medicine is not avaiable right now");
			return mar;
		}
		for (MedicineAmount ma: list) {
			if (ma.getMedicine().equals(medicine) && ma.getAmount()<1) {
				// salje poruku adminu apoteke da nema na stanju leka!
				System.out.println("usao u if da nema leka 2");
				mar.setMedicineAmount(null);
				mar.setMessage("Medicine is not avaiable right now");
				return mar;	

			}
			dontExist=true;
		}
		if (dontExist==true) {
			mar.setMedicineAmount(null);
			mar.setMessage("Medicine is not avaiable right now");
			return mar;	

		}
		MedicineAmount medAm= medicineAmpountRepo.findByPharmacyAndMedicine(exam.getPharmacy(), medicine);
		medAm.setAmount(medAm.getAmount()-1);
		medicineAmpountRepo.save(medAm);
		MedicineReservation mr = new MedicineReservation();
		mr.setMedicine(medicine);
		mr.setPatient(exam.getPatient());
		mr.setPharmacy(exam.getPharmacy());
		mr.setTaken(false);
		Date date1= new Date();
		Date date = new Date(date1.getTime() + 3600*1000*24*7);
		long time = date.getTime();
		java.sql.Timestamp timeRes = new java.sql.Timestamp(time);
		mr.setDateAndTime(timeRes);
		medicineReservationRepo.save(mr);
		// smanji amount za jedan
		// napravi rezervaciju pacijentu za lek
		mar.setMedicineAmount(medAm);
		mar.setMessage("Reserved");
		System.out.println("rezervisao ek");
		return mar;
		//treba resiti responce

	}
}
