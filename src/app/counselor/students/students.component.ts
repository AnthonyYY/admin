import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {Student} from '../students';
import {genders} from '../../common/gender';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less']
})
export class StudentsComponent implements OnInit {

  genders = genders;
  contentHeader: Sidebar[];
  students: Array<any>;
  curStudent: Student;
  studentCreatedFilterTime: {
    start: number;
    end: number;
  };
  studentFilterName: string;
  userFilterGender: string;
  userFilterGrade: string;
  userFilterPhone: string;
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
    this.userFilterGender = '';
    this.userFilterGrade = '';
    this.userFilterPhone = '';
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.counselorService.fetchStudents().then( students => {
      console.log(students);
      this.students = students;
    } );
  }

  switchFilterGender($event): void {
    this.userFilterGender = $event.value === 'ALL' ?  '' : $event.value;
    console.log(this.userFilterGender);
  }

  handleTimeRangeChange($event): void {
    this.studentCreatedFilterTime = {
      start: $event.start,
      end: $event.end,
    };
    this.studentCreatedFilterTime = {...this.studentCreatedFilterTime};
  }

  switchParentGender($event) {

  }

  switchGender($event) {

  }
}
