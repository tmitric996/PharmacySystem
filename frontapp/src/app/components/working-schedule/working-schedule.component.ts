import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Counseling } from 'src/app/model/counseling';
import { Examination } from 'src/app/model/examination';
import { Medicine } from 'src/app/model/medicine';
import { ScheduleExaminationRequest } from 'src/app/model/schedule-examination-request';
import { User } from 'src/app/model/user';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';
import { ExaminationServiceService } from 'src/app/service/examination-service.service';
import { MedicineServiceService } from 'src/app/service/medicine-service.service';

@Component({
  selector: 'app-working-schedule',
  templateUrl: './working-schedule.component.html',
  styleUrls: ['./working-schedule.component.css']
})
export class WorkingScheduleComponent implements OnInit {

  ser: ScheduleExaminationRequest;
  currPatient: User;
  showExam= false;
  showCoun= false;
  isDerm= false;
  isExam=false;
  isCoun=false;
  report="";
  dtOptions={};
  medicines: Medicine[];
  examinatons: Examination[];
  exam: Examination;
  coun: Counseling;
  counselings: Counseling[];
  isPharm=false;
  scheduleClicked=false;
  constructor(private examService: ExaminationServiceService,
    private medResService: MedicineServiceService,
    private counService: CounselingServiceService,
    private router: Router) { 
    this.examinatons=[];
    this.medicines=[];
    this.counselings=[];
    this.exam=new Examination;
    this.coun=new Counseling;
    this.currPatient= new User;
    this.ser= new ScheduleExaminationRequest;
  }

  ngOnInit(): void {
    this.exam.patient=new User;
    if(localStorage.getItem("AUTHORITIES")=="ROLE_DERMATOLOGIST"){
      this.examService.getScheduleDerm().subscribe( data => {
        this.examinatons=data;
        console.log(data);
        this.isDerm=true;
      });
 
    } else if (localStorage.getItem("AUTHORITIES")=="ROLE_PHARMACIST"){
        this.counService.getSchedulePharm().subscribe( data => {
          this.counselings=data;
          this.isPharm=true;
        });
    }
  }
  openExam(id: number){
    for (let exams of this.examinatons){
      if (exams.id==id)
      { this.exam.patient=exams.patient;
        this.exam=exams;
        this.currPatient=exams.patient;
        console.log(this.exam.patient.email+ " "+ localStorage.getItem("AUTHORITIES"));
      }
    }
    this.showExam=true;
  }
  openCoun(id: number){
    for (let couns of this.counselings){
      if (couns.id==id)
      { this.coun.patient=couns.patient;
        this.coun=couns;
        this.currPatient=couns.patient;
        
      }
    }
    this.showCoun=true;
  }
  cancelExam(){
    console.log(this.exam.patient+ " "+ localStorage.getItem("AUTHORITIES"));
    if (this.isPharm){
      this.counService.cancel(this.coun).subscribe( data => {
        this.showCoun=false;
        this.ngOnInit();
      });
    }
    else {
    this.examService.cancel(this.exam).subscribe( data => {
      console.log(data);
      this.showExam=false;
      this.ngOnInit();
    });}
  }
  startExam(){
    this.medResService.findAll().subscribe( data => {
      this.medicines=data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    this.isExam=true;
  }
  startCoun(){
    this.medResService.findAll().subscribe( data => {
      this.medicines=data;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    this.isCoun=true;
  }
  tryPrescribe(id: number){
    if (this.isPharm){
      this.medResService.tryReservationPharm(this.coun, id).subscribe(data => {
        console.log(data);
        alert(data.message);
      }); 
    } else {
    this.medResService.tryReservation(this.exam, id).subscribe(data => {
      console.log(data);
      alert(data.message);
    });}
  }
  scheduleExam(id: number){
    this.ser.examId=id;
    this.ser.patientEmail=this.currPatient.email;
    this.examService.scheduleExam(this.ser).subscribe( data => {
      console.log(data);// za sad bez provere o slobodnom terminu i zauzetosti pacijesnta
    });
    this.scheduleClicked=true;
  }
  scheduleCoun(id: number){
    this.ser.examId=id;
    this.ser.patientEmail=this.currPatient.email;
    this.counService.scheduleCoun(this.ser).subscribe( data => {
      console.log(data);// za sad bez provere o slobodnom terminu i zauzetosti pacijesnta
    });
    this.scheduleClicked=true;
  }
  finishExam(){
    this.exam.report=this.report;
    this.examService.finishExam(this.exam).subscribe( data => {
      console.log(data);
      this.scheduleClicked=false;
      this.isExam=false;
      this.router.navigate(["/homepage"]);
    });
    
    
  }
  finishCoun(){
    this.coun.report=this.report;
    this.counService.finishCoun(this.coun).subscribe( data => {
      this.scheduleClicked=false;
      this.isCoun=false;
      this.router.navigate(["/homepage"]);
    });
  }
}
