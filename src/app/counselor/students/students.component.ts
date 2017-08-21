import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {Student} from '../students';
import {state} from '../../common/state';
import {states} from '../../common/state';

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
  userFilterShool: string;
  states: any;
  stateList: any;
  constructor(
    private counselorService: CounselorService
  ) {
    this.switchState = this.switchState.bind(this);
  }

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
    this.userFilterShool = '';
    this.states = state;
    this.stateList = states;
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

  switchState(): void {
    this.counselorService.switchState(this.curStudent.id).then( success => {
      if (success) {
        this.curStudent.status = 'CONNECTION';
      }
    } );
  }

  switchParentGender($event) {

  }

  switchGender($event) {

  }
}
