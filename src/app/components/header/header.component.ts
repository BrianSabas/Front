import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myPortfolio:any;
  constructor(private portfolioData: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      console.log("Personal information" + JSON.stringify(data));
      this.myPortfolio=data[0];
    })
  }

}
