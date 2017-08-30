import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';
import {roles} from './enum';

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
        (data.data || []).forEach( (role ) => {
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
      case roles['super_admin']:
        this.router.navigate(['dashboard/admin']);
        break;
      /*咨询师*/
      case roles['consultant']:
        this.router.navigate(['dashboard/counselor']);
        break;
      /*咨询总监*/
      case roles['consultant_boss']:
        this.router.navigate(['dashboard/counselor']);
        break;
      /*咨询财务*/
      case roles['finance']:
        this.router.navigate(['dashboard/finance']);
        break;
      /*学管师*/
      case roles['studentmanager']:
        this.router.navigate(['dashboard/studentmanager']);
        break;
      /*教师*/
      case roles['teacher']:
        this.router.navigate(['dashboard/teacher']);
        break;
      /*咨询主任*/
      case roles['consultant_main']:
        this.router.navigate(['dashboard/consultant-main']);
        break;
      /*教研主任*/
      case roles['teacher_director']:
        this.router.navigate(['dashboard/teacher-director']);
        break;
      /*分校长*/
      case roles['schoolmaster']:
        this.router.navigate(['dashboard/president-master']);
        break;
        // 总校长
      case roles['schoolmaster_boss']:
        this.router.navigate(['dashboard/president-master']);
        break;
      /*人事专员出纳*/
      case roles['personnel_cashier']:
        this.router.navigate(['dashboard/personal-cashier']);
        break;
      /*人事经理*/
      case roles['personnel_manager']:
        this.router.navigate(['dashboard/personnel-manager']);
        break;
      default:
        this.alertService.alert({title: '提示', content: '角色异常', type: 'danger'});
        // this.router.navigate(['login']);
        return;
    }
  }
}
