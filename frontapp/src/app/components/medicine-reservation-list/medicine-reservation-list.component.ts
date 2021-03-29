import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanCancelReservation } from 'src/app/model/can-cancel-reservation';
import { MedicineReservation } from 'src/app/model/medicine-reservation';
import { ScheduleExaminationRequest } from 'src/app/model/schedule-examination-request';
import { MedicineServiceService } from 'src/app/service/medicine-service.service';

@Component({
  selector: 'app-medicine-reservation-list',
  templateUrl: './medicine-reservation-list.component.html',
  styleUrls: ['./medicine-reservation-list.component.css']
})
export class MedicineReservationListComponent implements OnInit {
ser: ScheduleExaminationRequest;
  canCancelReservation: CanCancelReservation[];
  medRes: MedicineReservation;
  constructor(private medicineSerrvice: MedicineServiceService, private router: Router) { 
    //.canCancelReservation = [];
    this.ser=new ScheduleExaminationRequest;
  }

  ngOnInit(): void {
    this.medicineSerrvice.getReservation().subscribe( data => {
      console.log(data);
      this.canCancelReservation=data;
      
    });
  }

  cancelReservation(id: number){
    this.ser = {examId: id,
      patientEmail: localStorage.getItem("USERNAME")+""}
      this.medicineSerrvice.cancel(this.ser).subscribe(data => {
        console.log(data);
      });
//poziv servisa
      this.medicineSerrvice.getReservation().subscribe( data => {
        console.log(data);
        this.canCancelReservation=data;
        
      });
     
      this.router.navigate(["/medicinereservationlist"]);

  }

  takeit(id: number){
    this.medicineSerrvice.takeit(id).subscribe( data => {
      console.log(data);
      this.medicineSerrvice.getReservation().subscribe( data => {
        console.log(data);
        this.canCancelReservation=data;
        
      });
    });
    this.router.navigate(["/medicinereservationlist"]);

  }
}
