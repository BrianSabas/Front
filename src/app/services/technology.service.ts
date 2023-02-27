import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from 'src/models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  
  url = 'http://localhost:8080/api/technology/'
  technology:Technology;

  constructor(private http:HttpClient) {
    this.technology = {
      id:"",
      name:"",
      porcentaje:""
    }
   }

  getTechnology(id:string):Observable<any>{
    return this.http.get(this.url + id)
  }

  getTechnologies(id:string):Observable<any>{
    return this.http.get(this.url + 'all/' + id)
  }

  saveTechnology(id:string, technology:Technology):Observable<any>{
    return this.http.post(this.url + id, technology)
  }

  editTechnology(id:string, technology:Technology):Observable<any>{
    return this.http.put(this.url + id, technology)
  }

  deleteTechnology(id:string):Observable<any>{
    return this.http.delete(this.url + id)
  }
}
