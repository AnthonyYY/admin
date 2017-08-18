import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {Student} from '../students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less']
})
export class StudentsComponent implements OnInit {

  contentHeader: Sidebar[];
  students: Array<any>;
  curStudent: Student;
  studentCreatedFilterTime: {
    start: number;
    end: number;
  };
  studentFilterName: string;
  userFilterUserGender: string;
  userFilterUserGrade: string;
  userFilterUserPhone: string;
  constructor(
    private counselorService: CounselorService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生列表页', icon: 'fa-graduation-cap'}
    ];
    this.students = [];
    this.curStudent = new Student();
    this.studentCreatedFilterTime = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.studentFilterName = '';
    this.userFilterUserGender = '';
    this.userFilterUserGrade = '';
    this.userFilterUserPhone = '';
    // this.fetchStudents();
  }

  fetchStudents(): void {
    this.counselorService.fetchStudents().then( students => {
      this.students = students;
    } );
  }

  switchFilterGender($event): void {
    this.userFilterUserGender = $event.value === '全部' ?  '' : $event.value;
  }

  handleTimeRangeChange($event): void {
    this.studentCreatedFilterTime = {
      start: $event.start,
      end: $event.end,
    };
    this.studentCreatedFilterTime = {...this.studentCreatedFilterTime};
  }
}
