import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:8080/api/project/';
  project:Project;


  constructor(private http:HttpClient) {
    this.project = {
      id:"",
      projectName:"",
      aboutProject:""
    }
   }

   getProjectAll(id:String):Observable<any>{
    return this.http.get(this.url + 'all/' + id)
   }

   getProjectById(id:String):Observable<any>{
    return this.http.get(this.url + id)
    }

   saveProject(id:String, project:Project):Observable<any>{
      return this.http.post(this.url + id, project)
    }

   updateProject(id:String, project:Project):Observable<any>{
      return this.http.put(this.url + id, project)
    }

   deleteProject(id:String){
      return this.http.delete(this.url + id)
    }
   }
