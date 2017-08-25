import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class RoleService {

  roles: object = {};
  roleList: Array<object> = [];
  constructor(
    private http: HttpService,
    private router: Router,
    private alertService: AlertService
  ) { }

  fetchRoleEnums(): void {
    this.http.get('common/role').then( data => {
      if (data.success) {
        data.data.forEach( (role ) => {
          role['text'] = role['roleName'];
          role['id'] = role['roleId'];
          this.roles[role.roleId] = role.roleName;
        } );
        this.roleList.push(...data.data);
        this.roles = data.data;
      } else {
        this.alertService.alert({title: '提示', content: '角色列表获取失败', type: 'danger'});
      }
    } );
  }

  navigateByRole(roleId): void {
    switch (roleId) {
      /*超级管理员*/
      case 'SUPER_ADMIN':
        this.router.navigate(['dashboard/admin']);
        break;
      /*咨询师*/
      case 'CONSULTANT':
        this.router.navigate(['dashboard/counselor']);
        break;
      case 'CONSULTANT_BOSS':
        this.router.navigate(['dashboard/counselor']);
        break;
      case 'FINANCE':
        this.router.navigate(['dashboard/finance']);
        break;
      case 'STUDENTMANAGER':
        this.router.navigate(['dashboard/studentmanager']);
        break;
      case 'TEACHER':
        this.router.navigate(['dashboard/teacher']);
        break;
      case 'CONSULTANT_MAIN':
        this.router.navigate(['dashboard/consultant-main']);
        break;
      case 'TEACHER_DIRECTOR':
        this.router.navigate(['dashboard/teacher-director']);
        break;
      default:
        this.alertService.alert({title: '提示', content: '角色异常', type: 'danger'});
        return;
    }
  }
}
