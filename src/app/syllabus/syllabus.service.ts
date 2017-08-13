import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Syllabus} from '../models/syllabus';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class SyllabusService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  fetchSyllabusList(): Promise<any> {
    return this.http.get('course').then( ( data ) => {
      if ( data.success ) {
        return data.data;
      }
      return [];
    } );
  }

  removeSyllabus(id: string): Promise<any> {
    return this.http.remove( `course/${id}`).then( data => {
      if ( data.success ) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '课程删除成功'
        });
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: '课程删除失败'
        });
        throw new Error('删除课程失败');
      }
    } );
  }

  newSyllabus(syllabus: Syllabus): Promise<any> {
    return this.http.post( 'course', syllabus).then( data => {
      if (data.success) {
        this.alertService.alert({
          title: '提示',
          content: '课程创建成功',
          type: 'success'
        });
        return data.data.id;
      } else {
        this.alertService.alert({
          title: '提示',
          content: '课程创建失败，请重试',
          type: 'danger'
        });
        throw new Error('创建课程失败');
      }
    } );
  }

  updateSyllabus(syllabus: Syllabus) {
    return this.http.put('course', syllabus).then( data => {
      if (data.success) {
        this.alertService.alert({
          type: 'success',
          title: '提示',
          content: '课程编辑成功',
        });
      } else {
        this.alertService.alert({
          type: 'danger',
          title: '提示',
          content: data.data,
        });
        throw new Error('课程编辑失败');
      }
    } );
  }

}
