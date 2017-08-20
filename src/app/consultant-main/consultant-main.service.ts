import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';
import {Student} from './student';

@Injectable()
export class ConsultantMainService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchUnallocatedStudents(): Promise<any> {
   return this.http.get('counselor/student/distribution/no').then( data => {
     if (data.success) {
       return data.data;
     } else {
       return [];
     }
   } );
  }
  addStudent(student: Student): Promise<any> {
    return this.http.post('counselor/student', student).then( data => {
      if (data.success) {
        this.alertService.alert({
          title: '提示',
          content: '添加学生成功',
          type: 'success'
        });
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '创建学生失败',
          type: 'danger'
        });
        return [];
      }
    } );
  }

  fetchCounselorsBySchoolId(schoolId: string, role: string): Promise<any> {
    return this.http.get(`common/counselor/${schoolId}/${role}`).then( data => {
      if (data.success) {
        return data.data;
      } else {
        return [];
      }
    } );
  }

  fetchCounselorStat(employeeId?: string, startTime?: number, endTime?: number): Promise<any> {
    let url = 'counselor/stat';
    if (employeeId) {
      url += `?employeeId=${employeeId}&`;
    }
    if (startTime) {
      url += `?startTime=${startTime}&`;
    }
    if (endTime) {
      url += `?endTime=${endTime}&`;
    }
    return this.http.get(url).then( res => {
      if (res.success) {
        return res.data;
      } else {
        return {};
      }
    } );
  }

  assignStudentToCounselor(body): Promise<any> {
    return this.http.post('counselor/counselor/student', body).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '分配学生成功',
          type: 'success'
        });
      } else {
        this.alertService.alert({
          title: '提示',
          content: '分配学生失败',
          type: 'danger'
        });
      }
      return result.success;
    } );
  }

  fetchStuInfoById(stuId: string): Promise<any> {
    return this.http.get( `common/student/${stuId}` ).then( stuInfo => {
      console.log(stuInfo);
      if (stuInfo.success) {
        return stuInfo.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学生信息失败',
          type: 'danger'
        });
      }
    } );
  }

  updateStuInfo(body): Promise<any> {
    return this.http.put('counselor/student', body).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '学生信息已更新',
          type: 'success'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '更新学生信息失败',
          type: 'danger'
        });
      }
    } );
  }

}
