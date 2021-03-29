import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  info: any;
  isUser: boolean= false;
  isSystemAdmin= false;
  isDerm=false;
  isPharm=false;
  title = 'Pharmacy information system';
  constructor() {

   }

  ngOnInit(): void {
    if (localStorage.getItem("TOKEN")==null){
      localStorage.setItem("AUTHORITIES", "UNAUTHENTICATED");
    }
    this.info = {
      token: localStorage.getItem("TOKEN"),
      email: localStorage.getItem("USERNAME"),
      authorities: localStorage.getItem("AUTHORITIES")
    };
    console.log(this.info.token);
    console.log(this.info.authorities);
    if (this.info.authorities == "ROLE_PATIENT"){
      this.isUser=true;
    } else if (this.info.authorities == "ROLE_SYSTEM_ADMIN"){
      this.isSystemAdmin=true;
    } else if (this.info.authorities == "ROLE_PHARMACIST"){
      this.isPharm=true;
    } else if (this.info.authorities == "ROLE_DERMATOLOGIST"){
      this.isDerm=true;
    }
  }
  logout() {
    localStorage.clear();
    localStorage.setItem("AUTHORITIES", "UNAUTHENTICATED");
    window.location.reload();
    this.isUser=false;
    this.isSystemAdmin=false;
  }
}
