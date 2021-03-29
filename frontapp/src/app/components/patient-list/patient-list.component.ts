import { Component, OnInit } from '@angular/core';
import { Counseling } from 'src/app/model/counseling';
import { Examination } from 'src/app/model/examination';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';
import { ExaminationServiceService } from 'src/app/service/examination-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  isPharm=false;
  dtOptions: any = {};

  isDerm=false;
  counselings: Counseling[]
  examinations: Examination[];
  constructor(private counService: CounselingServiceService, private examService: ExaminationServiceService) { }

  ngOnInit(): void {
    this.counselings=[];
    this.examinations=[];
    if(localStorage.getItem("AUTHORITIES")=="ROLE_DERMATOLOGIST"){
      this.examService.historyDerm().subscribe( data=> {
        this.examinations=data;
        this.isDerm=true;

      });
    } else {
      this.counService.historyPharm().subscribe( data=> {
        this.counselings=data;
        this.isPharm=true;
      });
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
  }

}
