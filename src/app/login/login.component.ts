import {Component, OnInit, ViewChild} from '@angular/core';
import { Usr } from '../models/usr';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppSettings} from '../app-settings';
import 'rxjs/add/operator/toPromise';
import {AlertComponent} from '../alert/alert.component';
import {UserService} from "../common/user.service";

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
    this.userService.getCurUserInfo().then( data => {
      console.log(data);
    } );
  }

  login(): void {
    const that = this;
    this.http.put( AppSettings.API_ENDPOINT + `auth/login?username=${this.user.username}&password=${this.user.password}`, {})
      .toPromise()
      .then( (data) => {
        this.router.navigate(['dashboard']);
      } )
      .catch( err => {
        that.alertCmp.alert('info', '登录失败', err.json().data);
      } );
  }
}
