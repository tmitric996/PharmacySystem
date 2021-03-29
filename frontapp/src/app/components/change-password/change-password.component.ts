import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginInfo } from 'src/app/model/auth-login-info';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passRequest: any = {};
  info: any;
  userInfo: any;
  authlogin: AuthLoginInfo;
  constructor(private userService: UserServiceService,
    private router: Router,
     private authService: AuthServiceService) { 
    this.authlogin = new AuthLoginInfo("","");
  }

  ngOnInit(): void {
    this.info = {email: localStorage.getItem("USERNAME"),
    t: localStorage.getItem("TOKEN") };
  }
  saveChangePassFun(){
    this.passRequest.oldPassword = (<HTMLInputElement>document.getElementById("oldpass")).value;
    this.passRequest.newPassword = (<HTMLInputElement>document.getElementById("newpass")).value;
    console.log(this.passRequest);
    this.userService.updateMyPass(this.passRequest, this.info.t)
    .subscribe(data => {
      console.log(data); 
      this.userInfo = { // ako ovde vraca usera
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.homeAddress,
        city: data.city,
        state: data.state,
        phone: data.phoneNumber
      }
// probam da resim bag da posle promene pas nece da menja ostale podatke
      this.authlogin.email=data.email;
      this.authlogin.password=this.passRequest.newPassword;
      localStorage.clear();
      console.log(this.authlogin);
      this.authService.attemptAuth(this.authlogin)
      .subscribe(data => {
          console.log(data);
          localStorage.setItem("TOKEN", data.accessToken);

          this.userService.getMyInfo(this.authlogin.email)
          .subscribe(data => {
          console.log(data);
          localStorage.setItem("USERNAME", data.email);
          localStorage.setItem("AUTHORITIES", JSON.stringify(data.authorities).split("\"")[3]); //7 za drugi autoriti
        console.log(localStorage);  
        });
        }
      );}
     );  
    console.log(localStorage);
    localStorage.clear();
    this.router.navigate(["/homepage"]);
   
  }
}
