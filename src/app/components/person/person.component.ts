import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

portfolio:any;

  constructor(private portfolioData: PortfolioService) { }

  ngOnInit(): void {
  
    this.portfolioData.getData().subscribe(data => {
      console.log(data);
      this.portfolio=data;
      });
  }


  faLocationDot = faLocationDot;
}
