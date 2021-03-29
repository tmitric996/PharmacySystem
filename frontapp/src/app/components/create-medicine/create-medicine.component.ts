import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineRequest } from 'src/app/model/medicine-request';
import { MedicineReservation } from 'src/app/model/medicine-reservation';
import { MedicineServiceService } from 'src/app/service/medicine-service.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {

  medicineReq: MedicineRequest;
  constructor(private medicineService: MedicineServiceService, private router: Router) { 
    this.medicineReq = new MedicineRequest;
  }

  ngOnInit(): void {

  }
 onSubmit(){
   console.log(this.medicineReq);
    this.medicineService.saveMed(this.medicineReq).subscribe( data => {
      console.log(data);
      this.router.navigate(["/medicine-list"]);
    });
 }
}
