import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class PersonnelService {

  employees: any[];
  constructor(
    private http: HttpService,
    private alertService: AlertService,
  ) { }
  fetchEmployee(): Promise<any> {
    return this.http.get('persion/employee').then( result => {
      if (result.success) {
        this.employees = result.data;
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '员工列表获取失败',
          type: 'danger'
        });
      }
    } );
  }

  createEmployee(newEmployeeInfo): Promise <any> {
    return this.http.post('persion/employee', newEmployeeInfo).then( result => {
      if ( result.success ) {
        this.alertService.alert({
          title: '提示',
          content: '新员工已添加',
          type: 'success'
        });
        return result.data;
      }
    } );
  }

  updateEmployeeInfo(newEmployeeInfo): Promise<any> {
    return this.http.put('persion/employee', newEmployeeInfo).then( result => {
      if ( result.success ) {
        this.alertService.alert({
          title: '提示',
          content: '员工信息已更新',
          type: 'success'
        });
        return result.data;
      }
    } );
  }

  deleteEmployee(id: string): Promise<boolean> {
    return this.http.remove(`persion/employee/${id}`).then( result => {
      if (!result.success) {
        this.alertService.alert({
          title: '提示',
          content: '删除用户失败，' + result.data,
          type: 'danger'
        })
      }
      return result.success;
    } )
  }
}
