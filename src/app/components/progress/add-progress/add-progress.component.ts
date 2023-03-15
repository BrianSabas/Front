import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology.service';
import { Technology } from 'src/models/technology.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-progress',
  templateUrl: './add-progress.component.html',
  styleUrls: ['./add-progress.component.css']
})
export class AddProgressComponent implements OnInit {

  id = "";
  list:any = [];
  technology:Technology ={id:"", name:"", porcentaje:""}


  constructor(private technologyService:TechnologyService, private activatedRoute:ActivatedRoute, private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getTechnologies();
  }


  getTechnologies(){
    this.activatedRoute.params.subscribe({
      next: res=>{
        this.list = res;
        let id = res['id']
        if (id){
          this.technologyService.getTechnology(id).subscribe(
            resp => this.technology = resp
            );
        }
      }
    })
  }


  saveTechno(){
    this.technologyService.saveTechnology(this.id, this.technology).subscribe({
      next:res=>{
        console.log(res)
        this.router.navigate(['portfolio/' + this.id])
      },
      error: err=>{
        console.log(err)
      }
    })
  }

  updateTechno(){
    let portfolioId = this.authService.AuthenticatedUser.userId;
    this.technologyService.editTechnology(this.id, this.technology).subscribe({
      next: res=> {
        res = this.router.navigate(['/portfolio/' + portfolioId])
    },
    error: err=>{
      console.log(err)
    }
  })
  }
}
