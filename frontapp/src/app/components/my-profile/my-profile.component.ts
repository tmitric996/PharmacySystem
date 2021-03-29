import { Component, OnInit } from '@angular/core';
import { UserUpdateRequest } from 'src/app/model/user-update-request';
import { UserServiceService } from 'src/app/service/user-service.service';
import { AllergiesServiceService } from 'src/app/service/allergies-service.service';
import { Allergies } from 'src/app/model/allergies';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { AuthLoginInfo } from 'src/app/model/auth-login-info';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  authlogin: AuthLoginInfo;
  title: string;
  titleAllergie: string;
  infoAllergie: any;
  allergiesList: Allergies[];
  info: any;
  userInfo = {
    email: null,
    firstName: null,
    lastName: null,
    address: null,
    city: null,
    state: null,
    phone:  null
  };
  allergies: boolean = false;
  changeInfo: boolean = false;
  changePass: boolean = false;
  userUpdateRequest: UserUpdateRequest;
  medicine: string;
  passRequest: any = {};
  isPatient: boolean=false;
  isDr: boolean= false;
  constructor(private _location: Location, private userService: UserServiceService, private routher: Router, private authService: AuthServiceService, private allergiesService: AllergiesServiceService) {
    this.userUpdateRequest=new UserUpdateRequest();
    this.authlogin=new AuthLoginInfo("","");
   }

  ngOnInit(): void {
    if (localStorage.getItem('AUTHORITIES')=='ROLE_PATIENT'){
      this.isPatient=true;
    } else {this.isDr=true;}
    this.titleAllergie='My allergies';
    this.title="My profile";
    this.info = {email: localStorage.getItem("USERNAME"),
    t: localStorage.getItem("TOKEN") };
    console.log(this.info.t);
    this.userService.getMyInfo(this.info.email)
    .subscribe(data => {
      console.log(data);
      this.userInfo = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.homeAddress,
        city: data.city,
        state: data.state,
        phone: data.phoneNumber
      };
      console.log(this.userInfo);
  }
  );
  if (this.isPatient){
  this.allergiesService.getMedicinesForPatient(this.info.t)
    .subscribe(data => {
      this.allergiesList=data;
    });}
  }
  changeInfoFun() {
    this.changeInfo=true;
  }

  cancelFun(){
    this.changeInfo=false;
  }

  saveChangeFun(){
    this.userUpdateRequest.firstname = (<HTMLInputElement>document.getElementById("name")).value;
    this.userUpdateRequest.lastname = (<HTMLInputElement>document.getElementById("surname")).value;
    this.userUpdateRequest.address = (<HTMLInputElement>document.getElementById("address")).value;
    this.userUpdateRequest.city = (<HTMLInputElement>document.getElementById("city")).value;
    this.userUpdateRequest.state = (<HTMLInputElement>document.getElementById("state")).value;
    this.userUpdateRequest.phone = (<HTMLInputElement>document.getElementById("phone")).value;
    console.log(this.userUpdateRequest);
    console.log(this.info.t)
    this.userService.updateMyInfo(this.userUpdateRequest, this.info.t )
    .subscribe(data => {
      console.log(data);
      this.userInfo = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.homeAddress,
        city: data.city,
        state: data.state,
        phone: data.phoneNumber
      }; }
      );
      this.changeInfo=false;
     // window.location.reload();

  }

  addAllergies(){
    this.allergies=true;
  }
  changePassFun(){
    this.changePass=true;
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
    this.changePass=false;
    console.log(localStorage);
    localStorage.clear();
    window.location.reload();
    //vrati ga na login page posle promene lozinke.... mora ponovo da se uloguje
    //this._location.back();
    //ako posle ovoga pozovem update info dobijem eror, ali ako odem npr prvo back pa opet udjem nema erora
//this.routher.navigate(["/homepage"]);
    //window.location.reload();
    // treba uraditi da hendluje erore ako se ne unese ispravna stara sifra i slicno!!!
  }
  cancelPassFun(){
    this.changePass=false;
    this.allergies=false;
  }
  saveAllergiesFun(){
    this.medicine = (<HTMLInputElement>document.getElementById("medicine")).value;
    this.allergiesService.addAllergies(this.medicine, this.info.t)
    .subscribe(data => {
      console.log(data);
    });
    this.allergies=false;
    window.location.reload();
  }

}
