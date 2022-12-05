import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form:FormGroup
  constructor(private formBuilder:FormBuilder, private authenticationService:AuthenticationService, private route:Router) {
    this.form = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8)]]
      }
      );
   }

  ngOnInit(): void {
  }


  get Email() {
    return this.form.get('email');

  }

  get Password(){
    return this.form.get('password');
  }

  onSend(event:Event) {
    event.preventDefault;
    this.authenticationService.login(this.form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.route.navigate(['/portfolio'])
    })
  }

}
