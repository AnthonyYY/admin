import { Component, OnInit } from '@angular/core';
import {PersonalCashierService} from '../../personal-cashier.service';
import {ActivatedRoute} from '@angular/router';
import {payType, payTypeList} from '../../../common/enum';
import {UserService} from '../../../common/user.service';
import {AppSettings} from '../../../app-settings';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less']
})
export class StudentTableComponent implements OnInit {
  payOrRefundEvent: {
    employeeId: string,
    money: number,
    payType: string,
    remark: string,
    schoolId: string,
    studentId: string
  };
  payer: any[];
  select2Options: Select2Options;
  students: any[];
  curSchoolName: string;
  curSchoolId: string;
  curPayType: string;
  filterStudentName: string;
  filterStudentPhone: string;
  payType: any;
  payTypeList: any;
  constructor(
    private cashierService: PersonalCashierService,
    private route: ActivatedRoute
  ) {
    this.pay = this.pay.bind(this);
  }

  ngOnInit() {
    this.payer = [];
    this.students = [];
    this.route.params.subscribe((params) => {
      this.curSchoolName = params.schoolName;
      this.curSchoolId = params.schoolId;
      this.fetchStuBySchoolId(params.schoolId);
    });
    this.filterStudentName = '';
    this.filterStudentPhone = '';
    this.payType = payType;
    this.payTypeList = payTypeList;
    this.payOrRefundEvent = {
      employeeId: '',
      money: 0,
      payType: Object.keys(payType)[0],
      remark: '',
      schoolId: this.curSchoolId,
      studentId: ''
    };
    this.curPayType = Object.keys(payType)[0];
      this.select2Options = {
        placeholder: '请输入姓名搜索缴费/退费代理人',
        minimumInputLength: 1,
        ajax: {
          dataType: 'json',
          delay: 450,
          headers: {'Access-Token': UserService.getAccessToken()},
          url: (params) => {
            return AppSettings.API_ENDPOINT + `finance/employee/${this.curSchoolId}/${this.curPayType}/${params.term || '1-1'}`;
          },
          processResults: ( data ) => {
            (data.data || []).forEach( item => item.text = item.name + '(' + item.idCard + ')' );
            this.payer.push(...data.data);
            console.log(this.payer);
            return {
              results: data.data
            };
          },
          results: (term, page, context) => {
            console.log(term, page, context);
          }
        }
    };
  }

  fetchStuBySchoolId(schoolId: string): void {
    this.cashierService.fetchStuBySchoolId(schoolId).then( students => this.students = students );
  }

  switchPayType($event): void {
    this.payOrRefundEvent.payType = $event.value;
    this.payer = [];
  }

  handlePayerSwitch($event): void {
    this.payOrRefundEvent.employeeId = $event.value;
  }

  pay() {
    this.cashierService.pay( this.payOrRefundEvent ).then( success => {  })
  }

  initPaymentEvent(student): void {
    this.payOrRefundEvent.studentId = student.id;
    this.payOrRefundEvent.remark = '';
    this.payOrRefundEvent.money = 0;
  }
}
