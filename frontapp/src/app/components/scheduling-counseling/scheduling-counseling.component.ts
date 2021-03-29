import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/model/pharmacy';
import { ScheduleCounselingRequest } from 'src/app/model/schedule-counseling-request';
import { User } from 'src/app/model/user';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';
import { PharmacyServiceService } from 'src/app/service/pharmacy-service.service';

@Component({
  selector: 'app-scheduling-counseling',
  templateUrl: './scheduling-counseling.component.html',
  styleUrls: ['./scheduling-counseling.component.css']
})
export class SchedulingCounselingComponent implements OnInit {

  pharmacys: Pharmacy[];
  pharmacy1: Pharmacy;
  title: string;
  showPharm: boolean;
  pharmacists: User[];
  scr: ScheduleCounselingRequest;
  filterDateFrom: Date;
  constructor(private pharmacyService: PharmacyServiceService, private counelingService: CounselingServiceService) { 
   
  }

  ngOnInit(): void {
    this.scr = new ScheduleCounselingRequest;
    this.filterDateFrom = new Date();
    this.pharmacy1 = new Pharmacy();
    this.showPharm= false;
    this.title="List of avaiable pharmacy";
    this.pharmacyService.findAll().subscribe(data => {
      this.pharmacys = data;
    });
  }
  showPharmacyWithPharmacists(name: string){
    if (localStorage.getItem("TOKEN")!=null){
      console.log(name);
      this.pharmacyService.getPharmacyInfo(name)
      .subscribe(data => {
        console.log(data);
        this.pharmacy1=data
        console.log(this.pharmacy1);
        this.pharmacyService.getPharmacists(this.pharmacy1.id).subscribe( data =>{
          this.pharmacists=data;
          console.log(data);
        });
      });
      this.showPharm= true;
    }
  }
  scheduleCounseling(pharmacist: User){
    this.filterDateFrom = new Date((<HTMLInputElement>document.getElementById("TestDateString")).value);
    console.log(pharmacist);
    console.log(this.filterDateFrom.toISOString().slice(0, 16).replace('T', ' ')+":00");
    console.log(this.pharmacy1.id);
    this.scr.pharmacyId = this.pharmacy1.id;
    this.scr.pharmacist=Number(pharmacist.id);
    this.scr.dateAndTime = this.filterDateFrom.toISOString().slice(0, 16).replace('T', ' ')+":00";
   // this.scr.pharmacyId = this.pharmacy1.id;

    this.counelingService.schedule(this.scr).subscribe(data => {
      console.log(data);
    });
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
