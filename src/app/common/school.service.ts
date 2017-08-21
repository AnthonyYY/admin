import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {School} from './school';
import {AlertService} from '../alert/alert.service';

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
        console.log(data.success);
        return data.data;
      }else{
        this.alertService.alert({
          title: '提示',
          content: '获取课程列表失败',
          type: 'danger'
        })
      }
    } )
  }
}
