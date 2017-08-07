import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AppSettings} from '../app-settings';

@Injectable()
export class UserService {

  constructor(private http: HttpService) { }
  getCurUser(): void  {
    this.http.get( 'auth/logout' ).then( data => {
      console.log(data);
    } );
  }

}
