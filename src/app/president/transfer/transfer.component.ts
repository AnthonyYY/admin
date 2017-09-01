import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';
import {UserService} from '../../common/user.service';
import {AppSettings} from '../../app-settings';
import {PresidentService} from '../president.service';
import {auditState} from '../../common/enum';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.less']
})

export class TransferComponent implements OnInit {

  auditState: any;
  appRecords: any[];
  students: any[];
  select2Options: any;
  transferEvent: any;
  schools: any[];
  contentHeader: any[];
  constructor(
    private schoolService: SchoolService,
    private presidentService: PresidentService,
  ) {
    this.transfer = this.transfer.bind(this);
  }

  ngOnInit() {
    this.auditState = auditState;
    this.appRecords = [];
    this.students = [];
    this.transferEvent = {
      toSchoolId: '',
      remark: '',
      studentId: ''
    };
    this.schools = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '转校申请页', icon: 'fa-th-li'}
    ];
    this.fetchSchools();
    this.fetchAppRecords();
    this.select2Options = {
      placeholder: '请输入姓名搜索学生',
      minimumInputLength: 1,
      ajax: {
        dataType: 'json',
        delay: 450,
        headers: {'Access-Token': UserService.getAccessToken()},
        url: (params) => {
          return AppSettings.API_ENDPOINT + `common/student?name=${params.term}`;
        },
        processResults: ( data ) => {
          (data.data || []).forEach( item => item.text = item.name + '(' + item.idCard + ')' );
          this.students.push(...data.data);
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

  fetchSchools(): void {
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
      this.schools.forEach( school => school.text = school.name );
      this.transferEvent.toSchoolId = this.schools.length ? this.schools[0]['id'] : '';
    } );
  }

  switchSchool($event): void {
    this.transferEvent.toSchoolId = $event.value;
  }

  switchStudent($event): void {
    this.transferEvent.studentId = $event.value;
  }

  transfer(): void {
    this.presidentService.transfer( this.transferEvent )
                          .then( success => success && this.fetchAppRecords() );
  }

  fetchAppRecords(): void {
    this.presidentService.fetchAppRecords().then( records => {
      this.appRecords = records;
    } );
  }
}
