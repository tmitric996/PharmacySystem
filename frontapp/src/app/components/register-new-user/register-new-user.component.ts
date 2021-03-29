import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  addUserReq: any;
  title: string;
  constructor(private userService: UserServiceService) {
    this.addUserReq={
      email : "",
      password : "",
      firstname : "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      phone: "", 
      authority: {
        name: ""
      }
    };
    this.title="Create user";
   }

  ngOnInit(): void {
  }
  //namestiti da je obavezan uno polja, tj da ne moze da submituje ako nisu svi popunjeni

  onSubmit(){
    this.userService.addUser(this.addUserReq).subscribe( data => {
      console.log(data);
    });
  }
}
