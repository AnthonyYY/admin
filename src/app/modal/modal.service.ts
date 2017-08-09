import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ModalService {
  constructor() { }
  modalEventSubject = new Subject();
}
