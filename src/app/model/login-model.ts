export class LoginModel {
  user: User;
  token : string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;

  }
}
export interface User{
  _id: string;
}

