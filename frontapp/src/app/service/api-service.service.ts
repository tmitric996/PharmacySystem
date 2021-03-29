import { HttpHeaders, HttpClient, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

export enum RequestMethod {
  Get = 'GET',
  Head = 'HEAD',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Patch = 'PATCH'
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    console.log('usao u api post');
    return this.request(path, body, RequestMethod.Post, customHeaders);
  }

  get(path: string, args?: any): Observable<any> {
    const options = {
      headers: this.headers,
    };
  
    if (args) {
      options['params'] = serialize(args);
    }
 
    return this.request(path, args,  RequestMethod.Get,  options.headers)
      .pipe(catchError(this.checkError.bind(this)));
  }

  private request(path: string, body: any, method = RequestMethod.Post, custemHeaders?: HttpHeaders): Observable<any> {
    console.log('usao u request');
    console.log(method);
    console.log(path);
    console.log(body);
    const req = new HttpRequest(method, path, body, {
      headers: custemHeaders || this.headers, 
      reportProgress: true,
      withCredentials: true,
    });
    console.log(req);
    return this.http.request(req)
      .pipe(filter(response => response instanceof HttpResponse))
      .pipe(map((response: any) => response.body))// bilo je  .pipe(map((response: HttpResponse<any>) => response.body))
      .pipe(catchError(error => this.checkError(error)));
      
  }
  private checkError(error: any): any {
    
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
  
    throw error;
  }
}
export function serialize(obj: any): HttpParams {
  let params = new HttpParams();

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !looseInvalid(obj[key])) {
      params = params.set(key, obj[key]);
    }
  }

  return params;
}
export function looseInvalid(a: string | number): boolean {
  return a === '' || a === null || a === undefined;
}
