import {Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {AdminService} from '../admin.service';
import {User} from '../../models/user';
import {RoleService} from '../../common/role.service';
import {roleMap} from '../../common/enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  curPage: number;
  contentHeader: Sidebar[];
  users: User[];
  curUsr: User;
  curRoleId: string;
  roles: object;
  roleList: Array<any> = [{id: 1, text: 12}];
  newPassword: {id: string, password: string, rePassword: string};
  userCreatedFilterTime: {
    start: number;
    end: number;
  };
  rolesList: object[];
  userFilterName: string;
  userFilterUserName: string;
  userFilterUserPhone: string;
  userFilterUserRoleId: string;
  constructor(
    private adminService: AdminService,
    private roleService: RoleService
  ) {
    this.setNewPassword = this.setNewPassword.bind(this);
    this.setCurUsr = this.setCurUsr.bind(this);
    this.saveCurRoleId = this.saveCurRoleId.bind(this);
  }

  ngOnInit() {
    this.curPage = 1;
    this.rolesList = this.roleService.roleList;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '用户列表页', icon: 'fa-users'}
    ];
    this.roles = roleMap;
    this.users = [];
    this.roleList = this.roleService.roleList;
    this.curUsr = new User();
    this.newPassword = {id: '', password: '', rePassword: ''};
    this.userCreatedFilterTime = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.fetchUserList();
    this.userFilterName = '';
    this.userFilterUserName = '';
    this.userFilterUserPhone = '';
    this.userFilterUserRoleId = '';
  }
  findUsrById(id): User {
    return this.users.find( user => {
      return user.id === id;
    } );
  }
  clearPassword(): void {
    this.newPassword = {id: '', password: '', rePassword: ''};
  }
  setCurUsr(user: User): void {
    this.curUsr = {...user};
  }
  setCurRoleId(user): void {
    this.setCurUsr(user);
    this.curRoleId = this.curUsr.roleId;
  }
  switchRoleId($event): void {
    this.curRoleId = $event.value;
  }
  saveCurRoleId(): void {
    this.curUsr.roleId = this.curRoleId;
    this.adminService.setRoleType({
      id: this.curUsr.id,
      roleList: [this.curUsr.roleId],
    }).then( (result) => {
      console.log(result);
    } );
    const curUsr = this.findUsrById(this.curUsr.id);
    const curUsrIdx = this.users.indexOf(curUsr);
    this.users[curUsrIdx].roleId = this.curUsr.roleId;
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
    this.adminService.fetchUserList().then( users => this.users = users );
  }

  handleTimeRangeChange($event): void {
    this.curPage = 1;
    this.userCreatedFilterTime = {
      start: $event.start,
      end: $event.end,
    };
    this.userCreatedFilterTime = {...this.userCreatedFilterTime};
  }

  switchFilterRoleId($event): void {
    this.curPage = 1;
    this.userFilterUserRoleId = $event.value === '全部' ?  '' : $event.value;
  }

  handlePageChange (page): void {
    this.curPage = page;
  }
}
