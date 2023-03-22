import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from 'src/models/experience.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = 'https://residential-carlin-briansabas.koyeb.app/api/experience/' ;
  experience:Experience;

  constructor( private http: HttpClient) { 
    this.experience = {
      id: "",
      nombreEmpresa : "",
      trabajoActual : "",
      fechaInicio : "",
      fechaFin : "",
      descripcion: "",

    }
  }


  getExperienceAll(id:string):Observable<any>{
    return this.http.get(this.url  + 'all/' + id)
  }

  getExperienceById(id:string):Observable<any>{
  return this.http.get(this.url + id)
  }

  saveExperience(id:string, experience:Experience):Observable<any>{
  return this.http.post(this.url + id, experience)
  }

  editExperience(id:string, experience:Experience):Observable<any>{
  return this.http.put(this.url + id, experience)
  }

  deleteExperience(id:string):Observable<any> {
   return this.http.delete(this.url + id)
  }

}




