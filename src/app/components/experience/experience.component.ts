import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/models/experience.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  id = "";
  list:any = []
  experience:Experience = {id:"", nombreEmpresa: "", trabajoActual: "", fechaInicio:"", fechaFin:"", descripcion:"" }

  constructor(private experienceService:ExperienceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getAbout()
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


getAbout() {
  this.experienceService.getExperienceById(this.id).subscribe(res=> {
    this.list[0] = res
    console.log( "JAAAAAAAJA", res)
  })
}




  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
