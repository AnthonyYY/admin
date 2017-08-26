import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {School} from './school';
import {AlertService} from '../alert/alert.service';
import {roles} from './enum';

@Injectable()
export class SchoolService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchSchoolList(): Promise<School[]> {
    return this.http.get('common/school').then( result => {
      if (result.success) {
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
  }

  fetchCourses(): Promise<any>{
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
      }else{
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
}
