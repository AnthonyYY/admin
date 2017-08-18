import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpService} from '../service/http.service';
import {RequestOptionsArgs} from '@angular/http';

@Injectable()
export class UserService {
  public user: User | null = new User();
  constructor(
    private http: HttpService
  ) { }
  static saveAccessToken(token): void {
    sessionStorage.setItem('AccessToken', token);
  }
  static getAccessToken(): string {
    return sessionStorage.getItem('AccessToken');
  }
  static removeAccessToken(): void {
    sessionStorage.removeItem('AccessToken');
  }
  getCurUserInfo(options?: RequestOptionsArgs) {
    return this.http.get('auth/user/info', options).then( data => {
      if ( data.success ) {
        this.user = data.data;
        return data.data;
      } else {
        throw data.data;
      }
    } ).catch( err => {
      console.log(err);
    } );
  }
  emptyUsrInfo(): void {
    this.user = new User();
    UserService.removeAccessToken();
  }
}
