import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/models/experience.model';
import { Education } from 'src/models/education.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  id = "";
  list:any = []
  listEducation:any = []
  experience:Experience = {id:"", nombreEmpresa: "", trabajoActual: "", fechaInicio:"", fechaFin:"", descripcion:"" }
  education:Education = {id:"", careerName:"",  highSchoolName:"", highSchoolFinished:"", careerFinished:""}

  constructor(private experienceService:ExperienceService, private educationService:EducationService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getExperience();
    this.getEducation();
  }


  // getAbout(){
  //   this.activatedRoute.params.subscribe(resp => {
  //     let id = this.activatedRoute.snapshot.params['id']
  //     resp = id
  //     if (id) {
  //       this.experienceService.getExperienceAll(this.id).subscribe(      {
  //         next:res=>{
  //         res =  this.experience =res;
  //         console.log("JAAAAA",res);
  //         },
  //       error:  err=>{
  //         console.log("ERROOOOOR", err)
  //       }})


  //     }
  //   })
  // }



getExperience() {
  this.experienceService.getExperienceAll(this.id).subscribe(res=> {
    this.list = res
  })
}

deleteExperience(id:string){
  this.experienceService.deleteExperience(id).subscribe({
            next:res=>{
            res =  this.ngOnInit()
            },
          error:  err=>{
            console.log( err)
          }})

        }



getEducation(){
  this.educationService.getEducationAll(this.id).subscribe({
    next:res=>{
      this.listEducation = res
    },
    error: err=>{
      console.log(err)
    }
  })
}


deleteEducation(id:string){
  this.educationService.deleteEducation(id).subscribe({
    next:res=>{
      res = this.ngOnInit();
    },
    error: err => {
      console.log(err)
    }
  })
}

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
