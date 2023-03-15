import { Component, OnInit } from '@angular/core';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/models/project.model';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {


  id = "";
  list:any = [];
  project:Project = {id:"", projectName:"", aboutProject:""}

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectService) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getProjectAll();
  }

  
  getProjectAll(){
    this.projectService.getProjectAll(this.id).subscribe({
      next: res=>{
        console.log("Proyectos:", res)
        this.list = res;
      },
      error: err=>{
        console.log("project error:", err)
      }
    })
  }

  deleteProject(id:string){
    this.projectService.deleteProject(id).subscribe({
      next: res=>{
        this.ngOnInit();
      },
      error: err=>{
        console.log("delete project error: ", err)
      }
    })
  }


  portfolio:any;

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
