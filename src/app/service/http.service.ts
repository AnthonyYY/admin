import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
import {AppSettings} from '../app-settings';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {ModalService} from '../modal/modal.service';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private router: Router,
    private modalService: ModalService
  ) {}

  static _createSpecOptions(options: RequestOptionsArgs) {
    const headers = new Headers();
    headers.append('Access-Token', UserService.getAccessToken());
    const requestOptions = new RequestOptions({headers: headers});
    return requestOptions.merge(options || {});
  }

  private _handle401(status): void {
    if ( status === 401 ) {
      this.modalService.modalEventSubject.next({
        confirm: () => {
          this.router.navigate(['login']);
        },
        content: '登陆超时，请重新登陆',
        modalType: 'danger',
        closeBtn: false,
        cancelBtn: false
      });
    }
  }

  get(url: string, options?: RequestOptionsArgs): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.get( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( res => {
        if ( res.status === 200 ) {
          return {success: true, data: res.json().data};
        }else {
          return {success: false, data: null};
        }
      } )
      .catch( err => {
        this._handle401(err.status);
        return {success: false, data: null};
      } );
  }
  put(url: string, options: any): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.put( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( res => {
        if ( res.status === 200) {
          return {success: true, data: res.json().data};
        } else {
          throw res;
        }
      } )
      .catch( err => {
        this._handle401(err.status);
        return {success: false, data: null};
      } );
  }
  remove(url: string, options?: any): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.delete( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( res => {
        if ( res.status === 200) {
          return {success: true, data: res.json().data};
        } else {
          throw res;
        }
      } )
      .catch( err => {
        this._handle401(err.status);
        return {success: false, data: null};
      } );
  }
}
