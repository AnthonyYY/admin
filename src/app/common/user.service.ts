import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpService} from '../service/http.service';
import {RequestOptionsArgs} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  public user: User | null = new User();
  userInfoChange = new BehaviorSubject(null);
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
    return this.http.get('auth/user/info', options)
      .then( data => {
      if ( data.success ) {
        this.user = data.data;
        this.userInfoChange.next(this.user.roleId);
        return data.data;
      } else {
        throw data.data;
      }
    } );
  }

  emptyUsrInfo(): void {
    this.user = new User();
    UserService.removeAccessToken();
  }
}
