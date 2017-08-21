import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class CounselorService {

  constructor(
    private http: HttpService,
    private alertService: AlertService,
  ) { }
  fetchStudents(): Promise<any> {
    return this.http.get('counselor/student').then( data => {
      if ( data.success ) {
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学生列表失败',
          type: 'danger'
        });
      }
    } );
  }

  fetchStuAsset(): Promise<any> {
    return this.http.get( 'counselor/assets' ).then( data => {
      if (data.success) {
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学生资产信息失败',
          type: 'danger'
        });
      }
    } );
  }

  switchState(studentId: string): Promise<any> {
    return this.http.post( `counselor/counselor/student/${studentId}` ).then( data => {
      console.log(data);
      if (data.success) {
        return data.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '更改学生跟进状态失败',
          type: 'danger'
        });
      }
    } );
  }
}
