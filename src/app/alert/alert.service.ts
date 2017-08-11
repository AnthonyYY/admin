import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {AlertArgs} from './alert-args';

@Injectable()
export class AlertService {
  constructor() { }
  alertEventSubject = new Subject();
  alert(arg: AlertArgs){
    this.alertEventSubject.next(arg)
  }
}
