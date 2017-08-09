import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, RequestOptions} from '@angular/http';
import {AppSettings} from '../app-settings';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HttpService {

  constructor(
    private user: UserService,
    private http: Http,
    private router: Router
  ) { }

  get(url: string, options?: RequestOptionsArgs): Promise<any> {
    options = options || {};
    const headers = new Headers();
    headers.append('Access-Token', this.user.getAccessToken());
    // const requestOptions = new RequestOptions({headers: headers});
    requestOptions.merge(options);
    return this.http.get( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( res => {
        if ( res.status === 200 ) {
          return {success: true, data: res.json().data};
        }else {
          return {success: false, data: null};
        }
      } )
      .catch();
  }

  put(url: string, options: any): Promise<any> {
    return this.http.put( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( res => {
        if ( res.status === 200) {
          return {success: true, data: res.json().data};
        } else {
          return {success: false, data: null};
        }
      } )
      .catch( err => {
        if (err.status === 401 ) {
          this.router.navigate(['login']);
        }
        return {success: false, data: null};
      } );
  }
}
