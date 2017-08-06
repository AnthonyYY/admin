import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from '../app-settings';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  put(url: string, body: any): Promise<any> {
    return this.http.put( AppSettings.API_ENDPOINT + url, body)
      .toPromise()
      .then( res => {
        if ( res.status === 200) {
          return {success: true, data: res.json().data};
        } else {
          return {success: false, data: null};
        }
      } )
      .catch( err => {
        alert(err.json().data);
        if (err.status === 401 ) {
          this.router.navigate(['login']);
        }
        return {success: false, data: null};
      } );
  }
}
