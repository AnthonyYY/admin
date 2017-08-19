import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ModalArgs} from '../modal/modal-args';

@Injectable()
export class ConfirmService {

  constructor() { }
  confirmEventSubject = new Subject();
  confirm( confirmConfig: ModalArgs) {
    this.confirmEventSubject.next(confirmConfig);
  }
}
