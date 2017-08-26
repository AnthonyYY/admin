import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class TeacherDirectorService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  /* 班组信息的CURD */
  // 班组的C
  createGrade(grade): Promise<any> {
    return this.http.post( 'director/grade' , grade ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '新班组创建成功',
          type: 'success'
        });
        return result.data.id;
      }else{
        this.alertService.alert({
          title: '提示',
          content: '班组创建失败',
          type: 'danger'
        });
      }
    } );
  }
  // 班组的U
  updateGrade(newGrade): Promise<any> {
    return this.http.put( 'director/grade' , newGrade ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '班组信息更新成功',
          type: 'success'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '班组信息更新失败',
          type: 'danger'
        });
      }
    } );
  }
  // 班组的D
  deleteGrade(gradeId: string): Promise<boolean> {
    return this.http.post( `director/grade/${gradeId}` ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '班组信息已删除',
          type: 'success'
        });
      } else {
        this.alertService.alert({
          title: '提示',
          content: '删除班组信息失败',
          type: 'danger'
        });
      }
      return result.success;
    } );
  }

  /*课程信息的CURD*/
  // 课程的C
  createCourse(course): Promise<any> {
    return this.http.post('director/course', course).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '新课程创建成功',
          type: 'success'
        });
        return result.data.id;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '新课程创建失败',
          type: 'danger'
        });
      }
    } );
  }
  // 课程的D
  deleteCourse(courseId: string): Promise<any> {
    return this.http.remove(`director/course/${courseId}`).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '课程已删除',
          type: 'success'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '删除课程失败',
          type: 'danger'
        });
      }
    } );
  }
  // 课程的U
  updateCourse(course): Promise<any> {
    return this.http.put('director/course', course ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '课程信息已更新',
          type: 'success'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '更新课程失败',
          type: 'danger'
        });
      }
    } );
  }

  // 分配教师
  assignTeachers(assignment): Promise<any> {
    return this.http.post('director/teacher', assignment).then(  result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '教师分配成功',
          type: 'success'
        });
        return result.success;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '教师分配失败,请重试',
          type: 'danger'
        });
      }
    } );
  }
}
