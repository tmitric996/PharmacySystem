import { Component, OnInit } from '@angular/core';
import { Allergies } from 'src/app/model/allergies';
import { AllergiesServiceService } from 'src/app/service/allergies-service.service';

@Component({
  selector: 'app-allergies-list',
  templateUrl: './allergies-list.component.html',
  styleUrls: ['./allergies-list.component.css']
})
export class AllergiesListComponent implements OnInit {

  
  titleAllergie: string;
  infoAllergie: any;
  allergies: Allergies[];
  constructor(private allergiesService: AllergiesServiceService) { 
  }

  ngOnInit(): void {
    this.titleAllergie='My allergies';
    this.infoAllergie = {email: localStorage.getItem("USERNAME"),
    t: localStorage.getItem("TOKEN") };
    this.allergiesService.getMedicinesForPatient(this.infoAllergie.t)
    .subscribe(data => {
      this.allergies=data;
    });
  }

}
