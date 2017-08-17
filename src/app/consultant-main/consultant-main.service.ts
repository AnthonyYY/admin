import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';

@Injectable()
export class ConsultantMainService {

  constructor(
    private http: HttpService
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
}
