import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from '../model/medicine';
import { Observable } from 'rxjs';
import { MedicineReservationRequest } from '../model/medicine-reservation-request';
import { CanCancelReservation } from '../model/can-cancel-reservation';
import { ScheduleExaminationRequest } from '../model/schedule-examination-request';
import { MedicineRequest } from '../model/medicine-request';
import { Examination } from '../model/examination';
import { Counseling } from '../model/counseling';

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {
  

  private medicineUrl: string;
  private medicineUrlId: string = 'http://localhost:8080/medicine/id';
  private medicineUrlName: string = 'http://localhost:8080/medicine/name';
  private takeMedicineUrl: string;

  constructor(private http: HttpClient) { 
    this.medicineUrl='http://localhost:8080/medicine/all';
    this.takeMedicineUrl='http://localhost:8080/medicine/takeit';
  }
  public tryReservation(exam: Examination, idMed: number): Observable<any> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Observable<any>>(`http://localhost:8080/medicine/tryreservation/${idMed}`, exam, {headers});

  }
  public tryReservationPharm(exam: Counseling, idMed: number): Observable<any> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Observable<any>>(`http://localhost:8080/medicine/tryreservationpharm/${idMed}`, exam, {headers});

  }
  public findAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.medicineUrl);
  }
  public makeReservation(mrr: MedicineReservationRequest): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Observable<any>>('http://localhost:8080/medicine/reservation', mrr, {headers});
  }
  public getReservation(): Observable<CanCancelReservation[]> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<any>('http://localhost:8080/medicine/reservation', {headers});
  }
  public cancel(ser: ScheduleExaminationRequest): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<any>('http://localhost:8080/medicine/cancelreservation', ser, {headers});
   }
   public takeit(id: number): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<any>(this.takeMedicineUrl, id, {headers});
   }
   public saveMed(mr: MedicineRequest): Observable<Medicine>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<Medicine>('http://localhost:8080/medicine/savemedicine', mr, {headers});
   }
   
}
