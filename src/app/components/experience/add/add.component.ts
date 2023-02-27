import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/models/experience.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  list:any = []
  id = '';
  experience:Experience = {id:'', trabajoActual:'', nombreEmpresa:'', fechaInicio:'', fechaFin:'', descripcion:''} 

  constructor(private experienceService: ExperienceService, private activatedRoute:ActivatedRoute, private router:Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getExperience();
  }

  getExperience() {
    this.activatedRoute.params.subscribe(
  
      res=>{
        console.log(res)
        this.list[0]=res;
        let id = res['id'];
        if(id){
          this.experienceService.getExperienceById(id).subscribe(
            resp=>this.experience=resp
            )
            console.log(this.experience)
        }
      })
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

  updateExperience(){

    let portfolioId = this.authService.AuthenticatedUser.userId

    this.experienceService.editExperience(this.id, this.experience).subscribe({next:res=>{
      res = this.router.navigate(['/portfolio/' + portfolioId])
          },
      error: err=> {console.log(err)}
  })
  }




}
