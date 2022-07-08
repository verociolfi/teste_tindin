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
  constructor(public loginService:LoginService){}
  alterText() {
    console.log("estamos quase la");
  }

  showSearch() {
    return !this.loginService.getLogged();
  }
}
