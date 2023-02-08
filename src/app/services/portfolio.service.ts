import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  id = this.authService.AuthenticatedUser.userId;
  constructor( private http:HttpClient, private authService:AuthenticationService, httpClient: HttpClient) { }
  url:string = "http://localhost:8080/api/person/";
  getData():Observable<any> {
    return this.http.get(this.url)
  }


  getPersonById(id: string):Observable<any> {
    return this.http.get(this.url +  id)
  };

  

}
