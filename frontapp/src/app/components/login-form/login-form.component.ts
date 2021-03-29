import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';
import { AppComponent } from 'src/app/app.component';
import { AuthLoginInfo } from 'src/app/model/auth-login-info';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user:  User;
  title: string;
  form: any = {};
  errorMessage = '';
  
  constructor( 
    private router: Router,
    private authService: AuthServiceService,
    private userService: UserServiceService) {
      this.title='Log in';
      this.user = new User();
      
     }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('kliknuo');
    this.userService.getMyInfo(this.user.email)
    .subscribe(data => {
    console.log(data);
    if (data!=null){
    if (data.enabled){

    this.authService.attemptAuth(this.user)
        .subscribe(data => {
            console.log(data);
            localStorage.setItem("TOKEN", data.accessToken);

            this.userService.getMyInfo(this.user.email)
            .subscribe(data => {
            console.log(data);
            
            localStorage.setItem("USERNAME", data.email);
            localStorage.setItem("AUTHORITIES", JSON.stringify(data.authorities).split("\"")[3]); //7 za drugi autoriti

            //this.reloadPage();
            console.log(localStorage);
            if (data.firstLogin==true){
              console.log(data.firstlogin);
              this.router.navigate(["/changepassword"]);
            } else {
            //window.location.reload(); ne treba mi reload vec redirect,tj ruta!!
            window.location.reload();
            this.router.navigate(["/homepage"]);
          }
            });
          
          },
          error => {
            alert("Incorrect password!");
          console.log('Incorrect username or password.');
          console.log(error);          
          });
        } else {
          console.log("user didnt activated acc");
          alert("User didn't activate account!");
        }
      } else { alert("User with that email doesn't exist");}
      });
  }
}
