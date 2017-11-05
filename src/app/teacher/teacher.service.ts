import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class TeacherService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchSchedules(): Promise<any> {
    return this.http.get('teacher/schedule').then( results => {
      if (results.success) {
        return results.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取课程列表失败' + results.data,
          type: 'danger'
        });
      }
    } );
  }

  fetchClassHourStat(): Promise<any> {
    return this.http.get('teacher/course/stat').then(results => {
      if (results.success) {
        return results.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取课时信息失败' + results.data,
          type: 'danger'
        });
      }
    });
  }

  fetchClassRecord(): Promise<any> {
    return this.http.get('teacher/course/his').then(results => {
      if (results.success) {
        return results.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取上课记录失败' + results.data,
          type: 'danger'
        });
      }
    });
  }

  fetchStuScores(): Promise<any> {
    return this.http.get('teacher/course/score').then(results => {
      if (results.success) {
        return results.data;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '获取学生成绩失败' + results.data,
          type: 'danger'
        });
      }
    });
  }
}
