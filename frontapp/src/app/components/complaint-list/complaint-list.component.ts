import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/model/complaint';
import { User } from 'src/app/model/user';
import { ComplaintServiceService } from 'src/app/service/complaint-service.service';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {

  complaints: Complaint[] = [];
  complaint: Complaint;
  showComplaint: boolean = false;
  poruka: string ="";
  constructor(private compService: ComplaintServiceService) { }

  ngOnInit(): void {
    this.compService.getAll().subscribe( data => {
      this.complaints=data;
    });
    this.complaint = new Complaint;
    this.complaint.patient = new User;
    this.complaint.patient.email = "";
  }
  answerRequest(id: number){
    this.compService.getById(id).subscribe( data => {
      this.complaint = data;
    });
    this.showComplaint=true;
  }
  answer(){
    this.complaint.asnwer=(<HTMLInputElement>document.getElementById("poruka1")).value;
    this.complaint.answered=true;
    this.compService.answer(this.complaint).subscribe(data => {
      console.log(data);
      this.showComplaint=false;
      
    });
    this.compService.getAll().subscribe( data => {
      this.complaints=data;
    });
    this.showComplaint=false;
  }
}
