import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchUserList(): Promise<any> {
    return this.http.get('admin/user').then( result => {
      if (result.success) {
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取用户列表失败',
          type: 'danger'
        });
        return [];
      }
    } );
  }

  setNewPassword(body): Promise<any> {
    return this.http.put('admin/user/pwd', body).then( data => {
      if (data.success) {
        this.alertService.alert({
          title: '提示',
          content: '重置密码成功',
          type: 'success'
        });
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '重置密码失败',
          type: 'danger'
        });
      }
    } );
  }

  setRoleType(body): Promise<any> {
    return this.http.put('admin/user/role', body).then( data => {
      console.log(data);
      if (data.success) {
        this.alertService.alert({
          title: '提示',
          content: '角色类型已更新',
          type: 'success'
        });
      } else {
        this.alertService.alert({
          title: '提示',
          content: '角色类型已失败',
          type: 'danger'
        });
      }
      return data.data;
    } );
  }

  updateSchoolInfo(body: object): Promise<any> {
    return this.http.put('admin/school/', body).then( data => {
      if (data.success) {
        this.alertService.alert({
          title: '提示',
          content: '校区信息已更新',
          type: 'success'
        });
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '更新校区信息失败',
          type: 'danger'
        });
        throw Error('更新校区信息失败');
      }
    } );
  }

  addSchool(body): Promise<any> {
    return this.http.post('admin/school', body).then( data => {
      if(data.success){
        this.alertService.alert({
          title: '提示',
          content: '成功添加新校区' + body.name,
          type: 'success'
        });
        return data.data;
      }else{
        this.alertService.alert({
          title: '提示',
          content: '添加校区信息失败',
          type: 'danger'
        });
        throw Error('添加校区信息失败');
      }
    } );
  }
}
