import { Component, OnInit } from '@angular/core';
import { Counseling } from 'src/app/model/counseling';
import { CounselingServiceService } from 'src/app/service/counseling-service.service';

@Component({
  selector: 'app-counseling-history-list',
  templateUrl: './counseling-history-list.component.html',
  styleUrls: ['./counseling-history-list.component.css']
})
export class CounselingHistoryListComponent implements OnInit {

  counselings: Counseling[];
  constructor(private counService: CounselingServiceService) { 
    this.counselings = [];
  }

  ngOnInit(): void {
    this.counService.history().subscribe( data=> {
      this.counselings=data;
    });
  }

}
