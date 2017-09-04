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
  fetchTeachersByCourseId(courseId: string, courseScheduleId?: string): Promise<any> {
    let url = `stmanager/course/teacher/${courseId}`;
    if (courseScheduleId) { url += `?courseScheduleId=${courseScheduleId}` }
    return this.http.get( url).then( result => {
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
      return result.success;
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
    return this.http.post(`/stmanager/student/finish/${id}`).then( result => {
      if ( result.success ) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '已更新'
        });
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
    return this.http.post(`stmanager/student/schedule/cancel/${courseScheduleId}/${studentId}`).then( result => {
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
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '成绩已录入'
        });
        return result.data;
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '成绩录入失败'
        });
        throw Error(result);
      }
    }) ;
  }

  // 退购课程
  returnCoursePurchase( studentId, courseId, hourNum ): Promise<any> {
    return this.http.post(`stmanager/course/back/${studentId}/${courseId}/${hourNum}`).then( result => {
      if (result.success) {
        this.alertService.alert({
          content: '已成功退课',
          type: 'success',
          title: '提示'
        });
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '成绩录入失败, '  +  result.data
        });
      }
    } );
  }

  fetchStuAssets(): Promise<any> {
    return this.http.get('stmanager/student/back/list').then( result => {
      if (result.success) {
        return result.data;
      } else {
        this.alertService.alert({
          content: '获取学生资产信息失败, ' + result.data,
          type: 'danger',
          title: '提示'
        });
      }
    } );
  }

  drawback(drawback): Promise <any> {
    return this.http.post( 'stmanager/back/money' , drawback).then( res => {
      if (res.success) {
        this.alertService.alert({
          title: '提示',
          content: '退费申请已发起, 请等待审核',
          type: 'success'
        });
      } else {
        this.alertService.alert({
          title: '提示',
          content: '退费申请发起失败,' + res.data +  ' 请重试',
          type: 'danger'
        });
      }
    } );
  }

  // 退费统计
  fetchDrawbackRecord(): Promise<any> {
    return this.http.get('stmanager/stmanager/back').then( result => {
      if ( result.success ) {
        result.data = [
          {
            backMoney: 0,
            renewMoney: 0,
            teacherId: 'string',
            teacherName: 'string',
            teacherPhone: 'string'
          },
          {
            backMoney: 0,
            renewMoney: 0,
            teacherId: 'string',
            teacherName: 'string',
            teacherPhone: 'string'
          },
          {
            backMoney: 0,
            renewMoney: 0,
            teacherId: 'string',
            teacherName: 'string',
            teacherPhone: 'string'
          }
        ];
        return result.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取退费统计列表失败',
          type: 'danger'
        });
      }
    } );
  }
}
