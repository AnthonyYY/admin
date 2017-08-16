import {Component, OnInit } from '@angular/core';
import { Usr } from '../models/usr';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppSettings} from '../app-settings';
import {UserService} from '../common/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import {AlertService} from '../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: Usr;
  constructor(
    private alertService: AlertService,
    private router: Router,
    private http: Http,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.user = new Usr('admin', 'admin');
    if (UserService.getAccessToken()) {
      this.userService.getCurUserInfo().then( success => success && this.router.navigate(["dashboard"]));
    }
  }

  login(): void {
    const that = this;
    this.http.put( AppSettings.API_ENDPOINT + `auth/login?username=${this.user.username}&password=${this.user.password}`, {})
      .toPromise()
      .then( (res) => {
        const data = res.json();
        if ( data.status === true ) {
          UserService.saveAccessToken(data.data.accessToken);
          setTimeout(() => {
            this.router.navigate(['dashboard']);
          });
        }else {
          throw res;
        }
      } )
      .catch( err => {
        that.alertService.alert({
          type: 'warning',
          title: '登录失败',
          content: err.json().data});
      } );
  }
}
