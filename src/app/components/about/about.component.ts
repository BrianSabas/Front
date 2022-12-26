
import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { AboutService } from 'src/app/services/about.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  list:any=[];
  constructor(private portfolioData: PortfolioService, private aboutService:AboutService) { }

  ngOnInit(): void {  
    this.portfolioData.getData().subscribe(data => {
      console.log(data);
      this.portfolio=data;
      });
    this.getAbout();
  }

  onClick(){
    console.log("click")
  }

  getAbout(){
    this.aboutService.getAbout().subscribe(
      {
        next:res=>{
          this.list=res;
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
