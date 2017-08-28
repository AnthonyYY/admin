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

}
