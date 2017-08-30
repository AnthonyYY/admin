import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';

@Injectable()
export class FinanceService {

  constructor(
    private http: HttpService
  ) { }
}
