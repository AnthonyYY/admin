import { Component, OnInit } from '@angular/core';
import {ConsultantMainService} from '../consultant-main.service';
import {UnallocatedStudent} from '../unallocated-student';
import {Sidebar} from '../../sidebar/sidebar';
import {Student} from '../student';

@Component({
  selector: 'app-unallocated-students',
  templateUrl: './unallocated-students.component.html',
  styleUrls: ['./unallocated-students.component.less']
})
export class UnallocatedStudentsComponent implements OnInit {

  unAllocatedStudents: UnallocatedStudent[];
  curUnallocatedStudent: UnallocatedStudent;
  curStudent: Student;
  contentHeader: Sidebar[];
  constructor(
    private consultantService: ConsultantMainService
  ) {
    this.addStudent = this.addStudent.bind(this);
  }

  ngOnInit() {
    this.fetchUnallocatedStudents();
    this.unAllocatedStudents = [];
    this.curUnallocatedStudent = new UnallocatedStudent();
    this.curStudent = new Student();
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生列表页', icon: 'fa-users'}
    ];
  }

  resetCurUnallocatedStudent(): void {
    this.curUnallocatedStudent = new UnallocatedStudent();
  }

  fetchUnallocatedStudents(): void {
    this.consultantService.fetchUnallocatedStudents().then( data => {
      this.unAllocatedStudents = data;
    } );
  }

  addStudent(){
    this.consultantService.addStudent(this.curStudent).then( data => {
      this.curStudent.id = data.id;
      this.unAllocatedStudents.push();
    } )
  }

  switchGender($event): void {
    console.log($event);
  }
}
