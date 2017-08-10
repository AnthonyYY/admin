import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ConfirmService {

  constructor() { }
  confirmEventSubject = new Subject();
}
