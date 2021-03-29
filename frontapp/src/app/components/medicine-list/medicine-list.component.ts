import { Component, OnInit } from '@angular/core';
import { MedicineServiceService } from 'src/app/service/medicine-service.service';
import { Medicine } from 'src/app/model/medicine';
import { PharmacyServiceService } from 'src/app/service/pharmacy-service.service';
import { Pharmacy } from 'src/app/model/pharmacy';
import { MedicineReservationRequest } from 'src/app/model/medicine-reservation-request';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  buttonTitle: string;
  isLogedIn: boolean =false;
  showP: boolean= false;
  title: string;
  medicines: Medicine[];
  pharmacys: Pharmacy[];
  filterDateFrom: Date;
  med: Medicine;
  mrr: MedicineReservationRequest;

  constructor(private medicineService: MedicineServiceService, private pharmacyService: PharmacyServiceService) {
    this.title='Medicine list';
    this.buttonTitle="Log in first";
    this.pharmacys = [];
    this.med=new Medicine;
    this.mrr=new MedicineReservationRequest;
   }

  ngOnInit(): void {
    this.filterDateFrom = new Date();
    console.log(localStorage.getItem("TOKEN")!=null);
    if (localStorage.getItem("TOKEN")!=null){
    this.isLogedIn=true;
    this.buttonTitle="see pharmacys that have it";
  }
    this.medicineService.findAll().subscribe(data => {
      this.medicines=data;
    });
  }
  showPharmacyThatHave(id: string){
    this.med.id=id;
    this.pharmacyService.getPharmacyWithMed(Number(id)).subscribe( data => {
      console.log(data);
      this.pharmacys=data;
      if (this.pharmacys.length>0){
        this.showP=true;} else {
          this.showP=false;
        }
    });
  }
  makeReservation(id: number){
    //poziv servisa
    this.filterDateFrom = new Date((<HTMLInputElement>document.getElementById("TestDateString")).value);
    this.mrr.dateAndTime = this.filterDateFrom.toISOString().slice(0, 16).replace('T', ' ')+":00";
    this.mrr.medicineId = Number(this.med.id);
    this.mrr.pharmacyId = id;
    console.log(this.mrr);
    this.medicineService.makeReservation(this.mrr).subscribe(data =>{
      console.log(data);
    });
    this.showP=false;
  }
  
  get TestDateString():string
  {
    //Strip the timezone letter 'Z' from the string;
    
    return this.filterDateFrom.toISOString().slice(0, 16).replace('T', ' ')+":00";  
  }
  set TestDateString(value:string)
  {
    this.filterDateFrom = new Date(value);
  }
}
