import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/models/project.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  id = "";
  list:any = [];
  project:Project = {id:"", projectName:"", aboutProject:""}

  constructor(private projectService:ProjectService, private authService:AuthenticationService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getProject();
  }

 getProject(){
  this.activatedRoute.params.subscribe({
    next: res=> {
      this.list = res;
      let id = res['id'];
      if (id){
        this.projectService.getProjectById(id).subscribe(
          resp =>{
            resp = this.project = resp;
          }
        )
      }
    }
  })
 }


  saveProject(){
    this.projectService.saveProject(this.id, this.project).subscribe({
      next: res=>{
        res = console.log(res)
        this.router.navigate(['portfolio/' + this.id])
      },
      error: err=>{
        console.log("Save project error: ", err)
      }
    })
  }

  updateProject(){
    let id = this.authService.AuthenticatedUser.userId;
    this.projectService.updateProject(this.id, this.project).subscribe({
      next: res=>{
        res = this.router.navigate(['portfolio', id])
      },
      error: err =>{
        console.log("Update project error: ", err)
      }
    })
  }

}
