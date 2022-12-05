import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let currentUser = this.authenticationService.AuthenticatedUser;
    if(currentUser && currentUser.accesToken) {
      req = req.clone({
        setHeaders:{
          Authorization: `bearer ${currentUser.accesToken}`
        }
      })
    }
    console.log("Interceptor is running " + JSON.stringify(currentUser))
    return next.handle(req);
  }


}
