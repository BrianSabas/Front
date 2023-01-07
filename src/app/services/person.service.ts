import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  url = 'http://localhost:8080/get/persons';
  constructor(private http: HttpClient) { }

  getPerson():Observable<any>{
    return this.http.get(this.url)
  }

  savePerson(person: Person):Observable<any> {
    return this.http.post(this.url, person)
  }

  editPerson(person: Person):Observable<any> {
    return this.http.put(this.url, person)
  }

}


export interface Person {
  Id:Number;
  Name:String;
  Surname:String;
  Tel:String;
  AboutMe:String;
  Email:String;
  Domicile:String;
}