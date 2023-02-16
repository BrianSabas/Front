import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/models/experience.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id = '';
  experience:Experience = {id:'', trabajoActual:'', nombreEmpresa:'', fechaInicio:'', fechaFin:'', descripcion:''} 

  constructor(private experienceService: ExperienceService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  saveExperience(){
    this.experienceService.saveExperience(this.id, this.experience).subscribe({
      next:res=>{
        console.log(res)
         this.router.navigate(['portfolio/' + this.id])
      },
      error:err =>{
      console.log(err)
      }
    })
  }
}
