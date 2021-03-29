import { Component, OnInit } from '@angular/core';
import { Examination } from 'src/app/model/examination';
import { ExaminationServiceService } from 'src/app/service/examination-service.service';

@Component({
  selector: 'app-examination-history-list',
  templateUrl: './examination-history-list.component.html',
  styleUrls: ['./examination-history-list.component.css']
})
export class ExaminationHistoryListComponent implements OnInit {

  examinations: Examination[];
  constructor(private examService: ExaminationServiceService) { 
    this.examinations = [];
  }

  ngOnInit(): void {
    this.examService.history().subscribe( data => {
      this.examinations=data;
    });
  }

}
