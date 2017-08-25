import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class StmanagerService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  /* 课表列表相关服务 */

  //  获取课程列表
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
  // 根据课程ID获取教师列表
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
  //  根据课程ID获取学生列表
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
  //  创建课表
  createSchedule(body): Promise<any> {
    return this.http.post('stmanager/course/schedule', body).then( result => {
      if (result.success) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '新课表已成功创建'
        });
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
  //  更新课表
  updateSchedule( body ): Promise<any> {
    return this.http.put('stmanager/course/schedule', body).then( result => {
      if (result.success) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '课表信息已更新'
        });
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '更新课表信息失败'
        });
      }
      return result.success
    } );
  }

  /* 学生课表相关服务 */
  fetchStuSchedule(): Promise<any> {
    return this.http.get('stmanager/student/schedule').then( result => {
      console.log(result);
      if (result.success) {
       return result.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '获取学生课表失败'
        });
      }
    } );
  }

  // 结束学生课表
  finishSchedule(id: string): Promise<any> {
    return this.http.get(`/stmanager/student/finish/${id}`).then( result => {
      if( result.success ){
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '已更新'
        })
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '操作失败'
        });
      }
      return result.success;
    } );
  }

  // 取消课程
  cancelRegisterSchedule(courseScheduleId, studentId) {
    return this.http.get(`stmanager/student/schedule/cancel/${courseScheduleId}/${studentId}`).then( result => {
      if (result.success) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '课程已取消'
        });
        return result.success;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '操作失败'
        });
      }
    } );
  }
  /* 学生列表 */
  fetchAllocatedStudents(): Promise<any> {
    return this.http.get('stmanager/student').then( result => {
      return result.data;
    } );
  }

  /* 学生课时信息 */
  fetchStudentStat(): Promise<any> {
    return this.http.get('stmanager/student/stat').then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '操作失败'
        });
      }
    } );
  }
  /* 更新学生课时信息的成绩 */
  updateStuScore(courseId, score, studentId): Promise<any> {
    return this.http.put(`stmanager/score/${courseId}/${score}/${studentId}`, {}).then( result => {
      if (result.success) {
        return result.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '操作失败'
        });
      }
    }) ;
  }
}
