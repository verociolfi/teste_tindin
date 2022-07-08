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

  text = '';

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {

  }

  public loginAction() {
    this.LoginService.login("master@tindin.com.br", "123");
  }

}
