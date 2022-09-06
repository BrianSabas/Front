import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private portfolioData: PortfolioService) { }

  ngOnInit(): void {  
    this.portfolioData.getData().subscribe(data => {
      console.log(data);
      this.portfolio=data;
    });
  }

  portfolio:any;

  faLocationDot = faLocationDot;
  faPen = faPen;
}
