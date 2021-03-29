import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {

  constructor(private http: HttpClient) { }

  public forDermatologist(body: any): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<any>('http://localhost:8080/complaint/fordermatologist', body, {headers});
   }
   public forPharmacist(body: any): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<any>('http://localhost:8080/complaint/forpharmacist', body, {headers});
   }
   public forPharmacy(body: any): Observable<any>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<any>('http://localhost:8080/complaint/forpharmacy', body, {headers});
   }
   public getAll(): Observable<Complaint[]>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.get<Complaint[]>('http://localhost:8080/complaint', {headers});
   }
   public getById(id: number): Observable<Complaint>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.get<Complaint>(`http://localhost:8080/complaint/${id}`, {headers});
   }
   public answer(c: Complaint): Observable<Complaint>{
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
     return this.http.post<Complaint>('http://localhost:8080/complaint', c, {headers});
   }
}
