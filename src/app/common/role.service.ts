import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Role} from './role';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class RoleService {

  roles: Array<Role>;
  constructor(
    private http: HttpService,
    private router: Router,
    private alertService: AlertService
  ) { }

  fetchRoleEnums(): void {
    this.http.get('common/role').then( data => {
      if (data.success) {
        console.log(data.data);
        this.roles = data.data;
      } else {
        throw Error('获取角色列表失败');
      }
    } );
  }

  navigateByRole(roleId): void {
    switch (roleId) {
      case 'SUPER_ADMIN':
        this.router.navigate(['dashboard/admin']);
        break;
      default:
        this.alertService.alert({title: '提示', content: '角色异常', type: 'danger'});
        return;
    }
  }
}
