import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading:boolean = false;

  text = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  public loginAction() {
    this.loginService.login("mastr@tindin.com.br", "123");



  }

  public retorno(){
    console.log("eu retornei do inferno");
  }
  getLoadingStatus():boolean{
    return this.loginService.getStatusLoading();
  }

}
