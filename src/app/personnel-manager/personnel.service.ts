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
  createEmployee(): Promise <any> {
    return this.http.post('persion/employee').then( result => {

    } );
  }
}
