import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {Student} from '../students';
import {state} from '../../common/state';

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
  userFilterState: string;
  states: any;
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
    this.userFilterState = '';
    this.states = state;
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.counselorService.fetchStudents().then( students => {
      console.log(students);
      this.students = students;
    } );
  }

  switchFilterState($event): void {
    this.userFilterState = $event.value === 'ALL' ?  '' : $event.value;
  }

  switchParentGender($event) {

  }

  switchGender($event) {

  }
}
