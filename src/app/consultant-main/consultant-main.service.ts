import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';
import {Student} from './student';

@Injectable()
export class ConsultantMainService {

  constructor(
    private http: HttpService,
    private alertService: AlertService
  ) { }
  fetchUnallocatedStudents(): Promise<any> {
   return this.http.get('counselor/student/distribution/no').then( data => {
     if (data.success) {
       return data.data;
     } else {
       return [];
     }
   } );
  }
  addStudent(student: Student): Promise<any> {
    return this.http.post('counselor/student', student).then( data => {
      if(data.success){
        return data.data;
      }else{
        this.alertService.alert({
          title: '提示',
          content: '创建学生失败',
          type: 'danger'
        });
        return [];
      }
    } )
  }
}
