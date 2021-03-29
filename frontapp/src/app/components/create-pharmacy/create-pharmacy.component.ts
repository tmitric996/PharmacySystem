import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacy } from 'src/app/model/pharmacy';
import { PharmacyServiceService } from 'src/app/service/pharmacy-service.service';

@Component({
  selector: 'app-create-pharmacy',
  templateUrl: './create-pharmacy.component.html',
  styleUrls: ['./create-pharmacy.component.css']
})

export class CreatePharmacyComponent implements OnInit {

  pharmacyReq: any;
  pharmacy: Pharmacy;
  
  constructor(private pharmService: PharmacyServiceService, private router: Router) {
    this.pharmacy = new Pharmacy;
  
  }

  ngOnInit(): void {
    this.pharmacyReq = {
      name : "",
      phone: "",
      address: "",
      description: ""
    }
  }

  onSubmit(){
    this.pharmService.createPharmacy(this.pharmacyReq).subscribe( data => {
     console.log(data);
     this.router.navigate(["/pharmacy-list"]);
    });
    
  }
}
