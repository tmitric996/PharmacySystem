import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUpdateRequest } from '../model/user-update-request';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser: User;
  private userUrl: string;
  //passRequest: any = {};
  constructor(private apiService: ApiServiceService,
    private http: HttpClient) {
    this.userUrl= 'http://localhost:8080/api'; // api/user...
   }
   public getMyInfo(email: string) : Observable<any>{
    console.log(email);
    
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post(`${this.userUrl}/{email}`,email, {headers});    

  }
  public updateMyInfo(userUR: UserUpdateRequest, t:string) : Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post(`${this.userUrl}/updatepatient`,userUR, {headers});
  }
  public updateMyPass(passReq: any, t:string) : Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post(`${this.userUrl}/pass`, passReq, {headers});
  }
  public addUser(body: any): Observable<User>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<User>(`${this.userUrl}/adduser`, body, {headers});
   }
   public getFreePharmacyAdmin(): Observable<User[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<User[]>(`${this.userUrl}/freepharmadmin`, {headers});
   }
}
