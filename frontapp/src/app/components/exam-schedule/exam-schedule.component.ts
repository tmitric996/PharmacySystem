import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanUnscheduleExamination } from 'src/app/model/can-unschedule-examination';
import { Examination } from 'src/app/model/examination';
import { ScheduleExaminationRequest } from 'src/app/model/schedule-examination-request';
import { ExaminationServiceService } from 'src/app/service/examination-service.service';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {
  ser: ScheduleExaminationRequest;
  examinations: Examination[];
  canUnscheduleExam: CanUnscheduleExamination[];
  constructor(private examinationService: ExaminationServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("TOKEN"));
    this.examinationService.getSchedule().subscribe( data =>{
      this.canUnscheduleExam = data;
      
    });
  
    
  }
  cancelExamination(id: number){
    this.ser = {examId: id,
    patientEmail: localStorage.getItem("USERNAME")+""}
    this.examinationService.unschedule(this.ser).subscribe( data => {
      console.log(data);
    });
    this.examinationService.getSchedule().subscribe( data =>{
      this.canUnscheduleExam = data;
    });
    this.router.navigate(["/myexaminationschedule"]);
    
  }
  
}
