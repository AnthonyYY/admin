import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class TeacherDirectorService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }

  createGrade(grade): Promise<any> {
    return this.http.post( 'director/grade' , grade ).then( result => {
      if(result.success) {
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

  updateGrade(newGrade): Promise<any> {
    return this.http.put( 'director/grade' , newGrade ).then( result => {
      if(result.success) {
        this.alertService.alert({
          title: '提示',
          content: '班组信息更新成功',
          type: 'success'
        });
        return result.success;
      }else{
        this.alertService.alert({
          title: '提示',
          content: '班组信息更新失败',
          type: 'danger'
        });
      }
    } );
  }

  deleteGrade(gradeId: string): Promise<boolean> {
    return this.http.post( `director/grade/${gradeId}` ).then( result => {
      if(result.success) {
        this.alertService.alert({
          title: '提示',
          content: '班组信息已删除',
          type: 'success'
        })
      }else{
        this.alertService.alert({
          title: '提示',
          content: '删除班组信息失败',
          type: 'danger'
        })
      }
      return result.success;
    } )
  }
}
