import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
import {AppSettings} from '../app-settings';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {ConfirmService} from '../confirm/confirm.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private router: Router,
    private confirmService: ConfirmService,
    private alertService: AlertService
  ) {}

  static _createSpecOptions(options: RequestOptionsArgs) {
    const headers = new Headers();
    headers.append('Access-Token', UserService.getAccessToken());
    const requestOptions = new RequestOptions({headers: headers});
    return requestOptions.merge(options || {});
  }

  static _successHandle(res) {
    if ( res.status === 200 ) {
      return {success: true, data: res.json().data};
    }else {
      return {success: false, data: null};
    }
  }

  private _handle401(status): void {
    if ( status === 401 ) {
      this.http.get('auth/logout');
      this.confirmService.confirm({
        confirm: () => {
          this.router.navigate(['login']);
          UserService.removeAccessToken();
        },
        content: '登录超时，请重新登陆',
        modalType: 'danger',
        closeBtn: false,
        cancelBtn: false
      });
    }
  }

  private _handle500(status, msg): void {
    if ( status === 500 ) {
      this.alertService.alert({
        title: '警告,操作失败',
        content: msg,
        type: 'danger'
      });
    }
  }

  get(url: string, options?: RequestOptionsArgs): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.get( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( HttpService._successHandle )
      .catch( err => {
        this._handle401(err.status);
        this._handle500(err.status, err.data);
        return {success: false, data: null};
      } );
  }
  put(url: string, body, options?: any): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.put( AppSettings.API_ENDPOINT + url, body , options)
      .toPromise()
      .then( HttpService._successHandle )
      .catch( err => {
        this._handle401(err.status);
        console.log(err);
        this._handle500(err.status, err.json().data);
      } );
  }
  remove(url: string, options?: any): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.delete( AppSettings.API_ENDPOINT + url, options)
      .toPromise()
      .then( HttpService._successHandle )
      .catch( err => {
        this._handle401(err.status);
        this._handle500(err.status, err.data);
        return {success: false, data: null};
      } );
  }
  post(url: string, body?, options?: any): Promise<any> {
    options = HttpService._createSpecOptions(options);
    return this.http.post( AppSettings.API_ENDPOINT + url, body, options)
      .toPromise()
      .then( HttpService._successHandle )
      .catch( err => {
        err = err.json();
        this._handle401(err.status);
        this._handle500(err.status === false ? 500 : err.status, err.data);
        return {success: false, data: null};
      } );
  }

}
