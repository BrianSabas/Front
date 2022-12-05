import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  url = 'http://localhost:8080/login';
  currentUserSubject:BehaviorSubject<any>;
  token:any;

  constructor(private http: HttpClient) {
    console.log("The authentication service is running.")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }


   login(credentials:any):Observable<any>{
    return this.http.post(this.url, credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
    }))
   }

   get AuthenticatedUser() {
    return this.currentUserSubject.value;
   }
}
