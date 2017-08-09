import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpService
  ) { }

  ngOnInit() {
    if(!UserService.getAccessToken()){
      this.router.navigate(["login"]);
    }
    if ( !this.userService.user ) {
      // this.userService.getCurUserInfo().then( (data) => {
      //   console.log(data);
      // } );
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
