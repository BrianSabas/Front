import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor( private http:HttpClient) { }
  url:string = "http://localhost:8080/";
  getData():Observable<any> {
    return this.http.get('this.url'+'person')
  }
}
