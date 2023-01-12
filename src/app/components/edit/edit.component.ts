import { JsonPipe } from '@angular/common';
import { TagContentType } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder, Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { About, AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

form:FormGroup

  id:string = "";
  about:About = {id:'', name:"", surname:"", tel:"", aboutMe:"", email:"", domicile:""};

  constructor(private aboutSvc: AboutService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder ) { 
      this.form = this.formBuilder.group({
        about:['']
      })
    }




  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.aboutSvc.getAboutById(this.id).subscribe(
      {next:res=>{
        this.about = res; 
      },
      error: err=> {console.log(err)}
    
    });
  }

 get data() {
  return this.form.get('about')?.value;
 }

  save() {
    let data = {
      "aboutMe":this.about
    }

    this.aboutSvc.editAbout(this.about, this.id).subscribe(
      {next:res=>{
        res = this.router.navigate(['/portfolio'])
        data;
            },
      error: err=> {console.log(err)}
    });
 
  }

} 
