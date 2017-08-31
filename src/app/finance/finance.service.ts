import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class FinanceService {

  constructor(
    private http: HttpService
  ) { }

  fetchStudentPaymentsById(schoolId: string): Promise<any> {
    return this.http.get(`finance/student/stat/${schoolId}`).then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        throw Error(result.data);
      }
    } );
  }

  fetchStudentPayLogsById(schoolId: string): Promise<any> {
    return this.http.get(`finance/student/pay/log/${schoolId}`).then( result => {
      if ( result.success ) {
        return result.data;
      } else {
        throw Error(result.data);
      }
    } );
  }
}
