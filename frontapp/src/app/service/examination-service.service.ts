import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanUnscheduleExamination } from '../model/can-unschedule-examination';
import { Examination } from '../model/examination';
import { ScheduleExaminationRequest } from '../model/schedule-examination-request';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ExaminationServiceService {

  private examUrl: string;
  private scheduleExamUrl: string;
  private unscheduleExamUrl: string;
  private historyExamUrl: string;
  
  constructor(private http: HttpClient) {
   this.examUrl= 'http://localhost:8080/examination/pharm';
   this.scheduleExamUrl ='http://localhost:8080/examination/schedule';
   this.unscheduleExamUrl ='http://localhost:8080/examination/unschedule';
   this.historyExamUrl ='http://localhost:8080/examination/history';
   }

   public findAllAvaiable(pharmId: number): Observable<Examination[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
     return this.http.post<Examination[]>(this.examUrl, pharmId, {headers});
   }
   public scheduleExam(ser: ScheduleExaminationRequest): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(ser);
    return this.http.post<Examination>(this.scheduleExamUrl, ser, {headers}); 
     
   }
   public cancel(exam: Examination): Observable<Examination>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Examination>('http://localhost:8080/examination/cancel', exam, {headers}); 
     
   }
   public finishExam(exam: Examination): Observable<Examination>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Examination>('http://localhost:8080/examination/finish', exam, {headers}); 
     
   }
   public getSchedule(): Observable<CanUnscheduleExamination[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<any>(this.scheduleExamUrl, {headers});
   }
   public getScheduleDerm(): Observable<Examination[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Examination[]>('http://localhost:8080/examination/derm', {headers});
   }
   public unschedule(ser: ScheduleExaminationRequest): Observable<Examination>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<Examination>(this.unscheduleExamUrl, ser, {headers});
   }
   public history(): Observable<Examination[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Examination[]>(this.historyExamUrl, {headers});
   }
   public historyDerm(): Observable<Examination[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Examination[]>('http://localhost:8080/examination/mypatients', {headers});
   }
   
}
