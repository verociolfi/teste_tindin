import { LoginModel } from './../model/login-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = "";
  private logged: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  public login(email: string, password: string) {
    this.http.post<LoginModel>('https://api-labs.tindin.com.br/auth', {
      "email": email,
      "password": password
    }).subscribe(res => {
      this.setLogged(res);
    })
  }
  setLogged(res: LoginModel) {
    this.token = res.token;
    this.logged = true;
    localStorage.setItem('token', btoa(JSON.stringify(res.token)));
    localStorage.setItem('usuario', btoa(JSON.stringify(res.user)));
    this.router.navigate(['home']);
  }
  getLogged(): boolean {
    return this.logged;
  }
  verifyLogged() {
    if(localStorage.getItem('token')) {
      this.logged = true;
    }
  }
}
