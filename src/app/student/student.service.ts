import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';

@Injectable()
export class StudentService {

  constructor(
    private http: HttpService
  ) { }

  fetchStudents(): Promise<any> {
    return this.http.get('student').then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        return [];
      }
    } );
  }
}
