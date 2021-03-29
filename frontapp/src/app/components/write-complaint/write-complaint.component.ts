import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/model/pharmacy';
import { User } from 'src/app/model/user';
import { ComplaintServiceService } from 'src/app/service/complaint-service.service';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';

@Component({
  selector: 'app-write-complaint',
  templateUrl: './write-complaint.component.html',
  styleUrls: ['./write-complaint.component.css']
})
export class WriteComplaintComponent implements OnInit {

  isPharmacy: boolean = false;
  isDermatologist: boolean = false;
  isPharmacist: boolean = false;
  myPharmacys: Pharmacy[] = [];
  myDermatologists: User[]= [];
  myPharmacists: User[]=[];
  poruka: string= "";
  pharmacy: Pharmacy;
  dermatologist: User;
  pharmacist: User ;
  body: any = {};

  constructor(private counService: CounselingServiceService,
    private compService: ComplaintServiceService) {
      this.body = {
        id: "",
        message: ""
      };
     }

  ngOnInit(): void {

  }

  forDermatologist(){
    this.poruka="";

    this.counService.getDermatologistsIMet().subscribe( data => {
      this.myDermatologists=data;
      console.log(data);
      this.isDermatologist=true;
    this.isPharmacist=false;
    this.isPharmacy=false;
    });
    
  }
  forPharmacy(){
    this.poruka="";

    this.counService.getPharmacyIBeen().subscribe( data => {
      this.myPharmacys=data;
      this.isDermatologist=false;
    this.isPharmacist=false;
    this.isPharmacy=true;
    });
    
  }
  forPharmacist(){
    this.poruka="";
    this.counService.getPharmacistsIMet().subscribe( data => {
      this.myPharmacists=data;
      console.log(data);
      this.isDermatologist=false;
      this.isPharmacist=true;
      this.isPharmacy=false;
    });
    
  }
  submitComplaintP(){
    this.body.id = (<HTMLInputElement>document.getElementById("pharmacist")).value;
    this.body.message = this.poruka;
    this.compService.forPharmacist(this.body).subscribe( data => {
      console.log(data);
    });
  }
  submitComplaintD(){
    this.body.id = (<HTMLInputElement>document.getElementById("dermatologist")).value;
    this.body.message = this.poruka;
    this.compService.forDermatologist(this.body).subscribe( data => {
      console.log(data);
    });
  }
  submitComplaintPharmacy(){
    this.body.id = (<HTMLInputElement>document.getElementById("pharmacy")).value;
    this.body.message = this.poruka;
    this.compService.forPharmacy(this.body).subscribe( data => {
      console.log(data);
    });
  }
}
