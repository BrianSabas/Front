
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { About, AboutService } from 'src/app/services/about.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id = "";
  list:any=[];
  about:About = {id:'', name:"", surname:"", tel:"", aboutMe:"", email:"", localidad:"", address:""};
  constructor(private portfolioData: PortfolioService, 
    private aboutService:AboutService,
    private activatedRoute: ActivatedRoute
    ) { 
    }

  ngOnInit(): void {  
    this.id = this.activatedRoute.snapshot.params['id']
    this.portfolioData.getData().subscribe(data => {
      this.list=data;
      });
    this.getAbout();
    }

 getAbout(){
    this.aboutService.getAboutById(this.id).subscribe(
      {
        next:res=>{
          this.list[0]=res;
          console.log(res);
        },
      error:  err=>{
        console.log(err)
      }
    });
    
  }




  portfolio:any;

  faLocationDot = faLocationDot;
  faPen = faPen;
}
