import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';
import {ConfirmService} from '../confirm/confirm.service';
import {Employee} from './employee';

@Injectable()
export class EmployeeService {

  constructor(
    private http: HttpService,
    private alertService: AlertService,
  ) { }
  fetchEmployees(): Promise<any> {
    return this.http.get('employee').then( result => {
      if (result.success) {
        return result.data;
      } else {
        this.alertService.alert({
          type: 'warning',
          title: '提示',
          content: '获取员工列表失败'
        });
        throw new Error('获取员工列表失败');
      }
    } );
  }

  removeEmployee(id: string): Promise<any> {
    return this.http.remove(`employee/${id}`).then( (result) => {
      return result;
    } );
  }

  newEmployee(employee: Employee) {
    return this.http.post('employee', employee).then( result => {
      return result;
    } );
  }

}
