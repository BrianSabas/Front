import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  id = "";
  list:any=[]

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private authService:AuthenticationService,
    private portfolioService:PortfolioService) { }




  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getPerson()
    console.log(`el id de usuario es: ${this.authService.userId}`)

  }


  getPerson(){
    this.portfolioService.getPersonById(this.id).subscribe(
      {
        next:res=>{
          this.list[0]=res;
          console.log(res);
        },
      error:  err=>{
        console.log( err)
      }
    });
    
  }
}
