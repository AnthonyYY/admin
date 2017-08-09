import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import {HttpService} from '../service/http.service';
import {User} from "../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.user = new User();
    if(!UserService.getAccessToken()){
      this.router.navigate(["login"]);
    }
    if ( !this.userService.user ) {
      this.userService.getCurUserInfo().then( (user) => {
        this.user = user;
      } );
    }
  }

  signOut() {
    this.http.get('auth/logout').then( data => {
      if(data.success){
        this.userService.emptyUsrInfo();
        this.router.navigate(['/login']);
      }
    } );
  }
}
