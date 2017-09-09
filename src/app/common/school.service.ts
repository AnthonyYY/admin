import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {School} from './school';
import {AlertService} from '../alert/alert.service';
import {roles} from './enum';

@Injectable()
export class SchoolService {

  schools: any[]; // cache schools list
  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchSchoolList(): Promise<School[]> {
    const xhr = this.http.get('common/school').then( result => {
      if (result.success) {
        this.schools = result.data;
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学校列表失败',
          type: 'danger'
        });
        return [];
      }
    } );

    if (this.schools) {
      return Promise.resolve(this.schools);
    }
    return xhr;
  }

  fetchCourses(): Promise<any> {
    return this.http.get('common/course').then( data => {
      if (data.success) {
        data.data.forEach( course => course.text = course.name);
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取课程列表失败',
          type: 'danger'
        });
      }
    } );
  }

  fetchGrades(): Promise<any> {
    return this.http.get('common/grade').then( data => {
      if (data.success) {
        return data.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取班组列表失败',
          type: 'danger'
        });
      }
    } );
  }

  fetchTeachers(): Promise<any> {
    return this.http.get(`common/employee/${roles.teacher}`).then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取教师列表失败',
          type: 'danger'
        });
      }
    } );
  }

  fetchPendingApproval(processType, processState): Promise<any> {
    return this.http.get(`common/progress/${processType}/${processState}`).then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取审核列表失败,' + result.data,
          type: 'danger'
        });
      }
    } );
  }

  audit(handlerStatus: string, processId: string, remark?: string): Promise<boolean> {
    let url = `common/money/${handlerStatus}/${processId}`;
    if (remark) {
      url += `?remark=${remark}`;
    }
    return this.http.put(url, {} ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '审核成功',
          type: 'success'
        });
        return result.success;
      }
      return false;
    } );
  }
}
