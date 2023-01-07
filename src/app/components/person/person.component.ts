import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

portfolio:any = [];

list:any = [];
  constructor(private portfolioData: PortfolioService, private personService: PersonService) { }

  ngOnInit(): void {
  
    this.portfolioData.getData().subscribe(data => {
      console.log(data);
      this.portfolio=data;
      });
      this.getPerson();
  }


  getPerson(){
    this.personService.getPerson().subscribe(
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
 
  faLocationDot = faLocationDot;
}
