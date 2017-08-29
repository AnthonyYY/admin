import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class PersonalCashierService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchStuBySchoolId(schoolId: string): Promise<any> {
    return this.http.get(`finance/student/list?schoolId=${schoolId}`).then( result => {
      if( result.success ) {
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学生列表失败，' + result.data,
          type: 'danger'
        });
      }
    } );
  }

  pay(payment): Promise<any> {
    return this.http.put('finance/student/pay', payment).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          type: 'success',
          content: '缴费成功'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          type: 'danger',
          content: '缴费失败，' + result.data
        });
      }
    } );
  }
}
