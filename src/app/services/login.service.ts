import { LoginModel } from './../model/login-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Error } from '../model/error';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = "";
  private logged: boolean = false;
  private loading: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  public login(email: string, password: string) {
    this.setLoading(true);
    this.http.post<LoginModel>('https://api-labs.tindin.com.br/auth', {
      "email": email,
      "password": password
    }).subscribe(res => {
      this.setLogged(res);
    }, error => {
      console.log(error)
    })
  }
  setLogged(res: LoginModel) {
    this.token = res.token;
    this.logged = true;
    localStorage.setItem('token', btoa(JSON.stringify(res.token)));
    localStorage.setItem('usuario', btoa(JSON.stringify(res.user)));
    this.router.navigate(['home']);
    this.setLoading(false);
  }
  getLogged(): boolean {
    return this.logged;
  }
  setLoading(status: boolean) {
    this.loading = status;
  }
  getStatusLoading(): boolean {
    return this.loading;
  }

  verifyLogged() {
    if (localStorage.getItem('token')) {
      this.logged = true;
    }
  }
}
