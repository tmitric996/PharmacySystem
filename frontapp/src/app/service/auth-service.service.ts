import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';
import { AuthLoginInfo } from '../model/auth-login-info';
import { Observable } from 'rxjs';
import { AuthJwtResponce } from '../model/auth-jwt-responce';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthSingupInfo } from '../model/auth-singup-info';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private accesstoken = "";

    loginURL = 'http://localhost:8080/auth/login';
    registerURL = 'http://localhost:8080/auth/register';
    
    loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor(private router: Router, private apiService: ApiServiceService, private http: HttpClient, public jwtHelper: JwtHelperService) { }
 
  login(user: User) : Observable<any>{
    console.log('usao u login');
    console.log(user);
    
    return this.apiService.post(this.loginURL, user, this.loginHeaders)
    .pipe(map((res)=>{
      console.log('Login success');
      console.log(res);
      this.accesstoken = res.accessToken;
      
    }));
  }
  // JwtResponse(accessToken,type,username,authorities)
  attemptAuth(credentials: AuthLoginInfo): Observable<any> {
    return this.http.post<AuthJwtResponce>(this.loginURL, credentials, this.httpOptions);
  }
  public isAuthenticated(): boolean {
     var token = localStorage.getItem("TOKEN");
    if (token != null) {
    return !this.jwtHelper.isTokenExpired(token);
  }
  return false;
  }

  register(asi: AuthSingupInfo): Observable<any> {
    return this.http.post<Observable<any>>(this.registerURL, asi,  this.httpOptions);
  }
}
