
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { About, AboutService } from 'src/app/services/about.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id = "";
  list:any=[];
  about:About = {id:'', name:"", surname:"", tel:"", aboutMe:"", email:"", localidad:"", address:""};
  constructor(private portfolioData: PortfolioService, 
    private aboutService:AboutService,
    private activatedRoute: ActivatedRoute
    ) { 
    }

  ngOnInit(): void {  
    this.id = this.activatedRoute.snapshot.params['id']
    this.getAbout();
    }


    aboutForm = new FormGroup({
      aboutMe: new FormControl('')
    })



    getAbout(){
      this.aboutService.getAbout().subscribe(res =>{
        this.list = res;
          })
     }


    // getAbout(){
    //   this.activatedRoute.params.subscribe(
    //     res=>{
    //       this.aboutService.getAboutById(this.id)
    //       this.list[0] = res
    //     }
    //     )
    //     let id = this.activatedRoute.snapshot.params['id']
    //     if (id){ 
    //       this.aboutService.getAboutById(id).subscribe(res=>{
    //         this.list[0] = res
    //       })
    //     }
    // }


    // getAbout() {
    //   this.activatedRoute.params.subscribe(
    //     res=>{
    //       let about = this.about;
    //       let id = this.activatedRoute.snapshot.params['id']
    //       this.list[0]=res;

    //       console.log("LAAAAAAAAAAAAAA", res)
    //       if(id){
    //         this.aboutService.getAboutById(id).subscribe(
    //           res=>this.about=res
    //           )
    //       }
    //     })

    //   }



//  getAbout(){
//     this.aboutService.getAboutById(this.id).subscribe(

//       {
//         next:res=>{
//         this.list[0]=res;
//         console.log("JAAAAA",res);
//         },
//       error:  err=>{
//         console.log(err)
//       }
//     });
//     let id = this.activatedRoute.snapshot.params['id']
//     }



  portfolio:any;

  faLocationDot = faLocationDot;
  faPen = faPen;
}
