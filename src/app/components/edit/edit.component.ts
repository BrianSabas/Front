import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder, Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { About, AboutService } from 'src/app/services/about.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

form:FormGroup

  id = '';
  about:About = {id:'', name:"", surname:"", tel:"", aboutMe:"", email:"", localidad:"", address:""};

  constructor(private aboutSvc: AboutService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService:AuthenticationService ) { 
      this.form = this.formBuilder.group({
        about:['']
      })
    }




  ngOnInit(): void {
      this.id = this.activatedRouter.snapshot.params['id'];
    this.aboutSvc.getAboutById(this.id).subscribe(
      {next:res=>{
        this.about = res; 
        console.log(res)
      },
      error: err=> {console.log( err)}
    
    });
  }

 get aboutData() {
  return this.form.get('about')?.value;
 }

  save() {
    let data = {
      "id": this.about.id,
      "name": this.about.name,
      "surname": this.about.surname,
      "tel": this.about.tel,
      "aboutMe": this.about.aboutMe,
      "email": this.about.email,
      "localidad": this.about.localidad,
      "address": this.about.address

    }

    this.aboutSvc.editAbout(this.about, this.id).subscribe(
      {next:res=>{
        res = this.router.navigate(['/portfolio/' + this.id])
        data;
            },
      error: err=> {console.log(err)}
    });
 
  }

} 
