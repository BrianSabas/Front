import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About, AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:string = "";
  editAbout:About = {id:'', name:"", surname:"", tel:"", aboutMe:"", email:"", domicile:""};

  constructor(private aboutSvc: AboutService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.aboutSvc.getAbout().subscribe(
      {next:res=>{
        this.editAbout = res;
      },
      error: err=> {console.log(err)}
    
    });
  }

  save() {
    this.aboutSvc.editAbout(this.editAbout, this.id).subscribe(
      {next:res=>{
        this.router.navigate(['/portfolio'])
      },
      error: err=> {console.log(err)}
    
    });
  }

} 
