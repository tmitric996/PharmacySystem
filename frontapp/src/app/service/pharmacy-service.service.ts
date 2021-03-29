import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Pharmacy } from '../model/pharmacy';
import { User } from '../model/user';
@Injectable(
)
export class PharmacyServiceService {
 
  private pharmacyUrl: string;
  private pharmacyUrlId: string = 'http://localhost:8080/pharmacy/id';
  private pharmacyUrlName: string;
  
  constructor(private http: HttpClient) {
   this.pharmacyUrl= 'http://localhost:8080/pharmacy';
   this.pharmacyUrlName= 'http://localhost:8080/pharmacy/name';
   }

   public findAll(): Observable<Pharmacy[]> {
     return this.http.get<Pharmacy[]>(this.pharmacyUrl);
   }
  public createPharmacy(body: any): Observable<Pharmacy> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Pharmacy>(this.pharmacyUrl, body, {headers})
  }  
   public getPharmacyInfo(pharmacyName: string): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Pharmacy>(this.pharmacyUrlName, pharmacyName, {headers});
   }
   public getPharmacists(id: number): Observable<User[]> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<User[]>(`${this.pharmacyUrl}/pharmacists/${id}`, {headers});
  }
  public getPharmacyWithMed(id: number): Observable<Pharmacy[]> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.get<Pharmacy[]>(`${this.pharmacyUrl}/havemedicine/${id}`, {headers});
  }
  public setAdmin(body: any): Observable<Pharmacy> {
    const t= localStorage.getItem("TOKEN");
    const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
    return this.http.post<Pharmacy>(`${this.pharmacyUrl}/setadmin`, body, {headers});
  }
}
