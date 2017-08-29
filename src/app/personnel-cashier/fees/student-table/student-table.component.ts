import { Component, OnInit } from '@angular/core';
import {PersonalCashierService} from '../../personal-cashier.service';
import {ActivatedRoute} from '@angular/router';
import {payType, payTypeList} from '../../../common/enum';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less']
})
export class StudentTableComponent implements OnInit {

  students: any[];
  curSchoolName: string;
  filterStudentName: string;
  filterStudentPhone: string;
  payType: any;
  payTypeList: any;
  constructor(
    private cashierService: PersonalCashierService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.students = [];
    this.route.params.subscribe((params) => {
      this.curSchoolName = params.schoolName;
      this.fetchStuBySchoolId(params.schoolId);
    });
    this.filterStudentName = '';
    this.filterStudentPhone = '';
    this.payType = payType;
    this.payTypeList = payTypeList;
  }

  fetchStuBySchoolId(schoolId: string): void {
    this.cashierService.fetchStuBySchoolId(schoolId).then( students => this.students = students );
  }

  searchTeacher($event): void {
    console.log($event);
  }
}
