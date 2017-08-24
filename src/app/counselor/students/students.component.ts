import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {Student} from '../students';
import {ConsultantMainService} from '../../consultant-main/consultant-main.service';
import {state, states} from '../../common/enum';

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
  userFilterSchool: string;
  states: any;
  stateList: any;
  constructor(
    private counselorService: CounselorService,
    private consultantService: ConsultantMainService
  ) {
    this.switchState = this.switchState.bind(this);
    this.updateStuInfo = this.updateStuInfo.bind(this);
    this.addStudent = this.addStudent.bind(this);
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
    this.userFilterSchool = '';
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

  /* 创建学生或者修改学生信息 */

  switchParentGender($event) {
    this.curStudent.parentSex = $event.value;
  }

  switchGender($event) {
    this.curStudent.sex = $event.value;
  }

  resetCurStudent(stuId): void {
    if (stuId) {
      this.consultantService.fetchStuInfoById(stuId).then( info => {
        this.curStudent = info;
      } );
    } else {
      this.curStudent = new Student();
      this.curStudent.sex = 'MALE';
    }
  }

  findStuById(id: string): Student {
    return this.students.find( stu => stu.id === id );
  }

  updateStuInfo(): void {
    this.consultantService.updateStuInfo(this.curStudent).then( (result) => {
      if (result === true) {
        const toUpdateStuIndex = this.students.indexOf(this.findStuById(this.curStudent.id));
        this.students[toUpdateStuIndex] = {...this.curStudent};
      }
    } );
  }

  addStudent() {
    this.consultantService.addStudent(this.curStudent).then( data => {
      this.curStudent.id = data.id;
      this.students.unshift(this.curStudent);
    } );
  }
}
