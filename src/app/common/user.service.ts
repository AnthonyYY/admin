import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpService} from '../service/http.service';

@Injectable()
export class UserService {
  public user: User;
  constructor(
    private http: HttpService
  ) { }
  getCurUserInfo() {
    return this.http.get('auth/user/info').then( data => {
      console.log(data);
      return data;
    } );
  }
}
