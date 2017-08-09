import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpService} from '../service/http.service';
import {RequestOptionsArgs} from '@angular/http';

@Injectable()
export class UserService {
  public user: User;
  userAccessToken: string;
  constructor(
    private http: HttpService
  ) { }
  saveAccessToken(token): void {
    sessionStorage.setItem('AccessToken', token);
  }
  getAccessToken(): string {
    return sessionStorage.getItem('AccessToken');
  }
  getCurUserInfo(options?: RequestOptionsArgs) {
    return this.http.get('auth/user/info', options).then( data => {
      console.log(data);
      return data;
    } );
  }
}
