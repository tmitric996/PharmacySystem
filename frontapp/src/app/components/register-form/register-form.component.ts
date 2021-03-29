import { Component, OnInit } from '@angular/core';
import { AuthSingupInfo } from 'src/app/model/auth-singup-info';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  asi: AuthSingupInfo;
  title: string;
  
  registerForm: any = {};
  buttonName: string = 'Register now';
  div1:boolean = false;
  constructor(
    private authService: AuthServiceService) { 
    this.title='Register';
    this.asi = new AuthSingupInfo();
  }
  ngOnInit(): void {
  }

  div1Function(){
    this.div1=!this.div1;
    if (this.div1==true){
      this.buttonName='Not now';
    } else { this.buttonName='Register now'; }
  }

  onSubmit() {
    console.log(this.asi);
    if (this.asi.password!=this.asi.password_cnfrm){
      alert("Please insert password again!");
    } else {
    alert('You will recieve verification mail. Please check Your mail!');

    if (this.asi.password.match(this.asi.password_cnfrm)){
    this.authService.register(this.asi).subscribe( data => {
      console.log(data);
    });
  }
  }
  }
}
