import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FinanceService} from '../../finance.service';
import {payType} from '../../../common/enum';

@Component({
  selector: 'app-payment-log',
  templateUrl: './payment-log.component.html',
  styleUrls: ['./payment-log.component.less']
})
export class PaymentLogComponent implements OnInit {

  curPage: number;
  payType: any;
  logs: any[];
  constructor(
    private router: ActivatedRoute,
    private financeService: FinanceService,
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.payType = payType;
    this.logs = [];
    this.router.params.subscribe( params => {
      this.fetchPaymentLogsBySchoolId(params.schoolId);
    } );
  }

  fetchPaymentLogsBySchoolId(schoolId): void {
    this.financeService.fetchStudentPayLogsById(schoolId).then( logs => this.logs = logs );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
