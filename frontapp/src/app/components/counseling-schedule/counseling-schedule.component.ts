import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanCancelCounseling } from 'src/app/model/can-cancel-counseling';
import { ScheduleExaminationRequest } from 'src/app/model/schedule-examination-request';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';

@Component({
  selector: 'app-counseling-schedule',
  templateUrl: './counseling-schedule.component.html',
  styleUrls: ['./counseling-schedule.component.css']
})
export class CounselingScheduleComponent implements OnInit {
  ser: ScheduleExaminationRequest;
  canCancelCounseling: CanCancelCounseling[];
  constructor(private counselingService: CounselingServiceService, private router: Router) { }
  

  ngOnInit(): void {
    console.log(localStorage.getItem("TOKEN"));
    this.counselingService.getSchedule().subscribe( data =>{
      console.log(data);
      this.canCancelCounseling = data;
      
      console.log(this.canCancelCounseling);
      
    });
  
  }
  cancelCounseling(id: number){
    this.ser = {examId: id,
    patientEmail: localStorage.getItem("USERNAME")+""}
    this.counselingService.unschedule(this.ser).subscribe( data => {
      console.log(data);
    });
    this.counselingService.getSchedule().subscribe( data =>{
      this.canCancelCounseling = data;
    });
    this.router.navigate(["/mycounselingschedule"]);
    
  }
}
