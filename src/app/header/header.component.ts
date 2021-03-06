import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../common/user.service';
import {HttpService} from '../service/http.service';
import {User} from '../models/user';
import {RoleService} from '../common/role.service';
import {roleMap} from '../common/enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user: User;
  roles: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpService,
    private roleService: RoleService,
  ) { }

  ngOnInit() {
    this.user = new User();
    this.roles = roleMap;
    if (!UserService.getAccessToken()) {
      return this.router.navigate(['login']);
    }
    this.userService.getCurUserInfo()
      .then( user => {
        this.user = user;
        this.roleService.navigateByRole(user.roleId);
      } );
  }

  signOut() {
    this.http.get('auth/logout');
    this.userService.emptyUsrInfo();
    this.router.navigate(['/login']);
  }
}
