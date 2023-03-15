import { Component, OnInit } from '@angular/core';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { TechnologyService } from 'src/app/services/technology.service';
import { Technology } from 'src/models/technology.model';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {

  id = "";
  list:any = [];
  technology:Technology = {id:'', name:'', porcentaje:''}

  constructor(private technologyService:TechnologyService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getTechnologies();
  }

  getTechnologies(){
    this.technologyService.getTechnologies(this.id).subscribe({
      next: res=>{
        this.list= res;
        console.log(res)
      },
      error: err=>{
        console.log(err)
      }
    })
    
  }

  deleteTechno(id:string){
    this.technologyService.deleteTechnology(id).subscribe({
      next:res=>{
       this.ngOnInit()
      },
      error: err=>{
        console.log(err)
      }
    })
  }


  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
