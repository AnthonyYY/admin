import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Syllabus} from '../models/syllabus';

@Injectable()
export class SyllabusService {

  constructor(private http: HttpService) { }

  fetchSyllabusList(): Promise<any> {
    return this.http.get('course').then( ( data ) => {
      if ( data.success ) {
        return data.data;
      }
      return [];
    } );
  }

  removeSyllabus(id: string): Promise<any> {
    return this.http.remove( `course/${id}`).then( res => {
      console.log(res);
    } );
  }
}
