import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class StudentManagerBossService {

  constructor(
    private http: HttpService,
    private alertService: AlertService,
  ) { }
  fetchUndistributedStudents(): Promise<any[]> {
    return this.http.get('stmanager/student/distribution/no').then( result => {
      if (result.success) {
        return result.data;
      }
      return [];
    } );
  }

  fetchStudentManagers(): Promise<any[]> {
    return this.http.get('common/employee/STUDENTMANAGER').then( result => {
      if ( result.success ) {
        return result.data;
      }
        return [];
    } );
  }

  assignStudentToManager(assignment): Promise<boolean> {
    return this.http.post('stmanager/stmanager/student', assignment).then( result => {
      if (result.success) {
        this.alertService.alert({
          type: 'success',
          content: '学生已分配',
          title: '提示'
        });
      }
      return result.success;
    } );
  }

  fetchPayments(): Promise<any[]> {
    return this.http.get('stmanager/stmanager/back').then( results => {
      if (results.success) {
        return results.data;
      }
      return [];
    } );
  }


  finishSchedule(scheduleId): Promise<any> {
    return this.http.post(`stmanager/student/finish/${scheduleId}`).then( result => {
      return result.success;
    } );
  }
}
