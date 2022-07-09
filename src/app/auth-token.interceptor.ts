import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  authReq : any;

  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {


    const AUTH_TOKEN = this.loginService.getToken();
    this.authReq = req.clone({
       setHeaders: { 'x-api-key': AUTH_TOKEN }
      });
    return next.handle(this.authReq);
  }
}


@NgModule({
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
})

export class Interceptor{}
