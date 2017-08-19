import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';

@Injectable()
export class StmanagerService {

  constructor(
    private http: HttpService
  ) { }

  /* 获取课程列表 */
  fetchSchedule(): Promise<any> {
    return this.http.get('stmanager/course/schedule').then( data => {
      if (data.success) {
        return data.data;
      } else {
        return [
          {
            courseName: '哈哈大笑课',
            courseScheduleId: '12312',
            endTime: 1503112133160,
            finish: false,
            schoolId: 'asdf',
            startTime: 1503111133160,
            teacherName: '面目可憎的老师',
          },
          {
            courseName: '呵呵大笑课',
            courseScheduleId: '12112',
            endTime: 1503122133160,
            finish: false,
            schoolId: 'asdf',
            startTime: 1502111133160,
            teacherName: '啊增老师'
          }
        ];
      }
    } );
  }
}
