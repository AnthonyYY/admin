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
    return this.http.get('stmanager/student/dis/stat').then( result => {
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
    return this.http.post(`stmanager/schedule/finish/${scheduleId}`).then( result => {
      return result.success;
    } );
  }

  fetchTeacherHours(): Promise<any> {
    return this.http.get('stmanager/teacher/schedule/stat').then( result => {
      if (result.success) {
        return result.data;
      }
      return [];
    } );
  }

  reAssignTeacher(oriEmployeeId, newEmployeeId): Promise<any> {
    return this.http.post('stmanager/change/' + oriEmployeeId + '/' + newEmployeeId ).then( result => {
        if ( result.success ) {
          this.alertService.alert({
            type: 'success',
            content: '学生已改编',
            title: '提示'
          });
        } else {
          this.alertService.alert({
            type: 'danger',
            content: '学生改编出错',
            title: '提示'
          });
        }
    } );
  }
}
