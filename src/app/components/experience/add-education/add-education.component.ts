import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/models/education.model';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  id = "";
  list:any = [];

  education:Education = {id:'', careerName:'', careerFinished:'', highSchoolFinished:'', highSchoolName:'' }
  constructor(private educationService: EducationService, private activatedRoute:ActivatedRoute, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getEducation();
  }



  getEducation(){
    this.activatedRoute.params.subscribe(
      {next: res=>{
        console.log(res);
        this.list = res;
        let id = res['id'];
        if(id){
          this.educationService.getEducation(id).subscribe(
            resp=>this.education=resp
            )
        }
      }}
      )
    }


  saveEducation(){
    this.educationService.saveEducation(this.id, this.education).subscribe({
      next: res=> {
        console.log(res)
        this.router.navigate(['portfolio/' + this.id])
      },
      error: err => {
        console.log(err)
      }
    })
  }

  updateEducationn(){
    let portfolioId = this.authService.AuthenticatedUser.userId
    this.educationService.editEducation(this.id, this.education).subscribe({next:res=>{
      res = this.router.navigate(['portfolio/' + portfolioId])
          },
      error: err=> {console.log(err)}
  })
}
}
