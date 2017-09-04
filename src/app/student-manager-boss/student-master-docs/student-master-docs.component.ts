import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StudentManagerBossService} from '../student-manager-boss.service';

@Component({
  selector: 'app-student-master-docs',
  templateUrl: './student-master-docs.component.html',
  styleUrls: ['./student-master-docs.component.less']
})
export class StudentMasterDocsComponent implements OnInit {

  contentHeader: Sidebar[];
  studentManagers: any[];
  payments: any[];
  undistributedStudents: any[];
  curStudentManager: any;
  constructor(
    private studentManagerBossService: StudentManagerBossService
  ) {
    this.assignStudentToManager = this.assignStudentToManager.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学管师管理页', icon: 'fa-table'}
    ];
    this.payments = [];
    this.studentManagers = [];
    this.undistributedStudents = [];
    this.curStudentManager = {};
    this.fetchUndistributedStudents();
    this.fetchStudentManagers();
    this.fetchPayments();
  }

  fetchStudentManagers(): void {
    this.studentManagerBossService.fetchStudentManagers().then( managers => this.studentManagers = managers );
  }

  fetchUndistributedStudents(): void {
    this.studentManagerBossService.fetchUndistributedStudents().then( students => {
      console.log(students);
      this.undistributedStudents = students;
    } );
  }

  ifZeroStudentChosen(): boolean {
    return this.undistributedStudents.every( student => !student.chosen );
  }

  assignStudentToManager(): void {

    const chosenStudentIds = this.undistributedStudents.filter( student => student.chosen ).map( student => student.id );
    const assignment = {
      employeeId: this.curStudentManager.id,
      studentId: chosenStudentIds
    };

    this.studentManagerBossService.assignStudentToManager(assignment).then( success => {
        if (success) {
          this.undistributedStudents = this.undistributedStudents.filter( student => !student.chosen );
        }
      } );
  }

  fetchPayments(): void {
    this.studentManagerBossService.fetchPayments().then( payments => this.payments = payments );
  }

}
