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
      case 'SUPER_ADMIN':
        this.router.navigate(['dashboard/admin']);
        break;
      case 'CONSULTANT':
        break;
      case 'FINANCE':
        break;
      case 'STUDENTMANAGER':
        break;
      case 'TEACHER':
        break;
      default:
        this.alertService.alert({title: '提示', content: '角色异常', type: 'danger'});
        return;
    }
  }
}
