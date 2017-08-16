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

}
