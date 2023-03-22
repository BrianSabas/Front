import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../../models/education.model'

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = 'https://residential-carlin-briansabas.koyeb.app/api/education/'
  education:Education;

  constructor(private http:HttpClient) {
    this.education = {
    id: "",
    careerFinished:"",
    careerName:"",
    highSchoolFinished:"",
    highSchoolName:""

    }
   }

  getEducation(id:string):Observable<any>{
  return this.http.get(this.url + id)
  }

  getEducationAll(id:string):Observable<any>{
    return this.http.get(this.url + 'all/' + id)
  }

  saveEducation(id:string, education:Education):Observable<any>{
    return this.http.post(this.url + id, education)
  }
  
  editEducation(id:string, education:Education):Observable<any>{
    return this.http.put(this.url + id, education)
  }

  deleteEducation(id:string):Observable<any>{
    return this.http.delete(this.url + id)
  }
}
