import {Component, OnInit, ViewChild} from '@angular/core';
import { Usr } from '../models/usr';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppSettings} from '../app-settings';
import {AlertComponent} from '../alert/alert.component';
import {UserService} from '../common/user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: Usr;
  @ViewChild(AlertComponent)
  alertCmp: AlertComponent;
  constructor(
    private router: Router,
    private http: Http,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.user = new Usr('admin', 'admin');
    if ( !this.userService.getAccessToken() ) {
      this.userService.getCurUserInfo().then( data => {
       console.log(data);
     } );
    }
  }

  login(): void {
    const that = this;
    this.http.put( AppSettings.API_ENDPOINT + `auth/login?username=${this.user.username}&password=${this.user.password}`, {})
      .toPromise()
      .then( (res) => {
        const data = res.json();
        if ( data.status === true ) {
          this.userService.saveAccessToken(data.data.accessToken);
          this.router.navigate(['dashboard']);
        }else {
          throw res;
        }
      } )
      .catch( err => {
        that.alertCmp.alert('info', '登录失败', err.json().data);
      } );
  }
}
