import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AboutService {


  url = 'http://localhost:8080/get/persons';
  constructor(private http: HttpClient) { }



  getAbout():Observable<any> {
    return this.http.get(this.url);
  }

  saveAbout(about: About):Observable<any>{
    return this.http.post(this.url, about);
  }

  editAbout(about: About):Observable<any> {
    return this.http.put(this.url, about);
  }
}


export interface About {
  Id:Number;
  Name:String;
  Surname:String;
  Tel:String;
  AboutMe:String;
  Email:String;
  Domicile:String;
}
