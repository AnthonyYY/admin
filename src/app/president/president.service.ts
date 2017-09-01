import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class PresidentService {

  constructor(
    private http: HttpService,
    private alertService: AlertService,
  ) { }

  audit(handlerStatus: string, processId: string, remark?: string): Promise<boolean> {
    let url = `president/money/${handlerStatus}/${processId}`;
    if (remark) {
      url += `?remark=${remark}`;
    }
    return this.http.put(url, {} ).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '审核成功',
          type: 'success'
        });
      }
      return result.success;
    } );
  }

  fetchSignMoney(): Promise<any> {
    return this.http.get('president/stat/pay').then( result => {
      if (result.success) {
        return result.data;
      } else {
        throw Error('操作失败');
      }
    } );
  }

  fetchRenewMoney(): Promise<any> {
    return this.http.get('president/stat/renew').then( result => {
      if (result.success) {
        return result.data;
      } else {
        throw Error('操作失败');
      }
    } );
  }

  fetchClassHour(): Promise<any> {
    return this.http.get('president/stat/teacher/hour').then( result => {
      if (result.success) {
        return result.data;
      } else {
        throw Error('操作失败');
      }
    } );
  }

  transfer(transferEvent: any): Promise<boolean> {
    return this.http.post('president/school', transferEvent).then( result => {
      if (result.success) {
        this.alertService.alert({
          title: '提示',
          content: '转校申请已发起， 正在审核中',
          type: 'success'
        });
      }
      return result.success;
    } );
  }

  fetchAppRecords(): Promise<any> {
    return this.http.get('common/my/application/CHANGE_SCHOOL').then( result => {
      if (result.success) {
        console.log(result);
        return result.data;
      }
      return [];
    } );
  }

  fetchStuTransferAppRecords(processLog: string, handlerStatus: string): Promise<any> {
    return this.http.get(`common/progress/${processLog}/${handlerStatus}`).then( result => {
      if (result.success) {
        return result.data;
      }
      return [];
    } );
  }

  /*
   *
   */
  checkBackApplication(handlerStatus, processId): Promise<any> {
    return this.http.put(`president/school/${handlerStatus}/${processId}`, {}).then( result => {
      if (result.success) {
        this.alertService.alert({
          type: 'success',
          title: '成功提示',
          content: '审批成功'
        });
      }
      return result.success;
    }  );
  }

}
