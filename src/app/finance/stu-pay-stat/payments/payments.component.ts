import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FinanceService} from '../../finance.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.less']
})
export class PaymentsComponent implements OnInit {

  curPage: number;
  payments: any[];
  constructor(
    private router: ActivatedRoute,
    private financeService: FinanceService,
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.payments = [];
    this.router.params.subscribe( params => {
      this.fetchPaymentsBySchoolId(params.schoolId);
    } );
  }

  fetchPaymentsBySchoolId(id: string): void {
    this.financeService.fetchStudentPaymentsById(id).then( payments => {
      this.payments = payments;
    } );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
