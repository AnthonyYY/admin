import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class StmanagerService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  /* 获取课程列表 */
  fetchSchedule(): Promise<any> {
    return this.http.get('stmanager/course/schedule').then( data => {
      if (data.success) {
        return data.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '获取课程列表失败'
        });
      }
    } );
  }
  /*根据课程ID获取教师列表*/
  fetchTeachersByCourseId(courseId: string): Promise<any> {
    return this.http.get( `stmanager/course/teacher/${courseId}`).then( result => {
      if ( result.success ) {
        (result.data || []).forEach( teacher => teacher.text = teacher.name );
        return result.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '获取教师列表失败'
        });
      }
      return [];
    } );
  }
  /* 根据课程ID获取学生列表 */
  fetchStudents(courseId): Promise<any> {
    return this.http.get(`stmanager/course/student/${courseId}`).then( res => {
      if (res.success) {
        return res.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '获取报名学生列表失败'
        });
      }
    } );
  }
  /* 创建课表 */
  createSchedule(body): Promise<any> {
    return this.http.post('stmanager/course/schedule', body).then( result => {
      if (result.success) {
        return result.data;
      }else{
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '创建课表失败'
        });
      }
    } );
  }
}
