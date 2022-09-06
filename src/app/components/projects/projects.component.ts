import { Component, OnInit } from '@angular/core';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.portfolio=data;
    })
  }
  
  portfolio:any;

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
