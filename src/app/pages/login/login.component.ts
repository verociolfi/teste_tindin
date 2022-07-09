import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/model/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  email = '';
  password = '';
  errorMsg: string = "";
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {

  }

  public loginAction() {
    this.loginService.login(this.email, this.password);
  }

  getLoadingStatus(): boolean {
    return this.loginService.getStatusLoading();
  }

}
