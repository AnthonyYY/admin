import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {ConsultantMainService} from '../consultant-main.service';

@Component({
  selector: 'app-consultation-record',
  templateUrl: './consultation-record.component.html',
  styleUrls: ['./consultation-record.component.less']
})
export class ConsultationRecordComponent implements OnInit {

  curPage: number;
  contentHeader: Sidebar[];
  signRecords: Array<any>;
  unAllocatedStudents: any[];
  curRecord: any;
  filterCounselorName: string;
  filterCounselorSchool: string;
  constructor(
    private consultantMainService: ConsultantMainService
  ) {
    this.assignStudentToCounselor = this.assignStudentToCounselor.bind(this);
  }

  ngOnInit() {
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '咨询师签约列表页', icon: 'fa-files-o'}
    ];
    this.signRecords = [];
    this.unAllocatedStudents = [];
    this.curRecord = {};
    this.filterCounselorSchool = '';
    this.filterCounselorName = '';
    this.fetchSignRecords();
    this.fetchUnallocatedStudents();
  }

  fetchSignRecords(): void {
    this.consultantMainService.fetchCounselorStat('').then( data => {
      this.signRecords = data;
    } );
  }

  fetchUnallocatedStudents(): void {
    this.consultantMainService.fetchUnallocatedStudents().then( data => {
      this.unAllocatedStudents = data;
      this.unAllocatedStudents.forEach( item => item.selected = false );
    } );
  }

  assignStudentToCounselor(): void {
    const body = {
      employeeId: this.curRecord.employeeId,
      studentId: []
    };
    this.unAllocatedStudents.forEach( stu => {
      if ( stu.selected ) {
        body.studentId.push(stu.id);
      }
    } );
    this.consultantMainService.assignStudentToCounselor(body).then( result => {
      if ( result === true ) {
        this.unAllocatedStudents = this.unAllocatedStudents.filter( (stu ) => {
          return stu.selected === false;
        } );
      }
    } );
  }


  /* help fn */
  ifZeroStudentSelected() {
    return this.unAllocatedStudents.every( stu => !stu.selected );
  }

  unSelectAllStu(): void {
    this.unAllocatedStudents.forEach( stu => stu.selected = false );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
