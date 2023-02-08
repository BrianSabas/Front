import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myPortfolio:any;
  constructor(private portfolioData: PortfolioService, private authService:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      console.log("Personal information" + JSON.stringify(data));
      this.myPortfolio=data[0];
    })
  }


  logout(){
   
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['login-form']);
      }
}


