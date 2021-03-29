import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CounselingHistoryListComponent } from '../components/counseling-history-list/counseling-history-list.component';
import { CanCancelCounseling } from '../model/can-cancel-counseling';
import { Counseling } from '../model/counseling';
import { Pharmacy } from '../model/pharmacy';
import { ScheduleCounselingRequest } from '../model/schedule-counseling-request';
import { ScheduleExaminationRequest } from '../model/schedule-examination-request';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CounselingServiceService {

  private scheduleCounUrl: string;
  private unscheduleCounUrl: string;
  private hsitoryCounUrl: string;

  constructor(private http: HttpClient) { 
    this.scheduleCounUrl= 'http://localhost:8080/counseling/schedule';
    this.unscheduleCounUrl= 'http://localhost:8080/counseling/unschedule';
    this.hsitoryCounUrl= 'http://localhost:8080/counseling/history';
  }
  public cancel(coun: Counseling): Observable<Counseling>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Counseling>('http://localhost:8080/counseling/cancel', coun, {headers}); 
     
   }
   public scheduleCoun(ser: ScheduleExaminationRequest): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(ser);
    return this.http.post<Counseling>('http://localhost:8080/counseling/schedulecoun', ser, {headers}); 
     
   }
   public finishCoun(exam: Counseling): Observable<Counseling>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Counseling>('http://localhost:8080/counseling/finish', exam, {headers}); 
     
   }
  public getSchedulePharm(): Observable<Counseling[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Counseling[]>('http://localhost:8080/counseling/pharm', {headers});
   }
  public getSchedule(): Observable<CanCancelCounseling[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<any>(this.scheduleCounUrl, {headers});
   }
   public unschedule(ser: ScheduleExaminationRequest): Observable<Counseling>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<Counseling>(this.unscheduleCounUrl, ser, {headers});
   }
   public schedule(scr: ScheduleCounselingRequest): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Observable<any>>(this.scheduleCounUrl, scr, {headers});
   }
   public history(): Observable<Counseling[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Counseling[]>(this.hsitoryCounUrl, {headers});
   }
   public historyPharm(): Observable<Counseling[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Counseling[]>('http://localhost:8080/counseling/mypatients', {headers});
   }
   public getPharmacyIBeen(): Observable<Pharmacy[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Pharmacy[]>('http://localhost:8080/counseling/pharmacysbeen', {headers});
   }
   public getPharmacistsIMet(): Observable<User[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<User[]>('http://localhost:8080/counseling/pharmacistsimet', {headers});
   }
   public getDermatologistsIMet(): Observable<User[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<User[]>('http://localhost:8080/counseling/dermatologistsimet', {headers});
   }
  }
