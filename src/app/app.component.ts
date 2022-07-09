import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
})
export class AppComponent {
  title = 'tindin';
  constructor(public loginService:LoginService,
    private router:Router){}


  showSearch():boolean {
    return !this.loginService.getLogged();
  }
  showLogin():boolean {
    return this.loginService.getLogged();
  }

  goToHome(){
    this.router.navigate(['home']);

  }
  logout () {
    this.loginService.logout();
  }
  goToLogin(){
    this.router.navigate(['login']);

  }
}
