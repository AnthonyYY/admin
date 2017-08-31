import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FinanceService} from '../../finance.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.less']
})
export class PaymentsComponent implements OnInit {

  payments: any[];
  constructor(
    private router: ActivatedRoute,
    private financeService: FinanceService,
  ) { }

  ngOnInit() {
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

}
