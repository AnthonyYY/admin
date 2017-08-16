import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {AdminService} from '../admin.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  contentHeader: Sidebar[];
  users: User[];
  curUsr: User;
  newPassword: {id: string, password: string, rePassword: string};
  constructor(
    private adminService: AdminService
  ) {
    this.setNewPassword = this.setNewPassword.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '用户列表页', icon: 'fa-users'}
    ];
    this.curUsr = new User();
    this.newPassword = {id: '', password: '', rePassword: ''};
    this.fetchUserList();
  }
  clearPassword(): void {
    this.newPassword = {id: '', password: '', rePassword: ''};
  }
  setCurUsr(user: User): void {
    this.curUsr = {...user};
  }
  setNewPassword(): void {
    const curUsrId = this.curUsr.id;
    const body = {
      ...this.newPassword,
      id: curUsrId,
    };
    this.adminService.setNewPassword(body).then( data => {
      console.log(data);
    });
  }
  fetchUserList(): void {
    this.adminService.fetchUserList().then( users => {
      this.users = users;
    } );
  }
}
