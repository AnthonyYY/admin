import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AlertArgs} from './alert-args';

@Injectable()
export class AlertService {
  constructor() { }
  alertEventSubject = new Subject();
  alert(arg: AlertArgs): void {
    this.alertEventSubject.next(arg);
  }
}
