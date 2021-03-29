import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/model/pharmacy';
import { PharmacyServiceService } from 'src/app/service/pharmacy-service.service';

@Component({
  selector: 'app-pharmacy-profile',
  templateUrl: './pharmacy-profile.component.html',
  styleUrls: ['./pharmacy-profile.component.css']
})
export class PharmacyProfileComponent implements OnInit {

  pharmacy: Pharmacy;
  constructor(pharmacyService: PharmacyServiceService) { 
  }

  ngOnInit(): void {
   
  }

}
