import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {School} from './school';

@Injectable()
export class SchoolService {

  constructor(
    private http: HttpService
  ) { }

  fetchSchoolList(): Promise<School[]> {
    return this.http.get('common/school').then( result => {
      if (result.success) {
        return result.data;
      } else {
        return [];
      }
    } );
}

}
