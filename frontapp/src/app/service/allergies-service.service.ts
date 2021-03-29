import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergiesServiceService {

  private url: string;
  constructor( private http: HttpClient) {
    this.url= 'http://localhost:8080/allergies'; }

    public addAllergies(medicine: string, t:string) : Observable<any> {
      const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
      return this.http.post(`${this.url}/add`, medicine, {headers});
    }

    public getMedicinesForPatient(t:string) : Observable<any> {
      const headers = new HttpHeaders({'Content-Type': 'application/json'}).set("Authorization", "Bearer " + t);
      return this.http.get(`${this.url}/patient`, {headers});
    }
}
