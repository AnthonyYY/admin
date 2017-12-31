import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StudentManagerBossService} from '../student-manager-boss.service';

@Component({
  selector: 'app-student-master-docs',
  templateUrl: './student-master-docs.component.html',
  styleUrls: ['./student-master-docs.component.less']
})
export class StudentMasterDocsComponent implements OnInit {

  curPageManager: number;
  curPageRecord: number;
  newAssignEmployeeId: any;
  contentHeader: Sidebar[];
  studentManagers: any[];
  toChangeToManagers: any[];
  payments: any[];
  undistributedStudents: any[];
  curStudentManager: any;
  constructor(
    private studentManagerBossService: StudentManagerBossService
  ) {
    this.assignStudentToManager = this.assignStudentToManager.bind(this);
    this.reAssignStuMaster = this.reAssignStuMaster.bind(this);
  }

  ngOnInit() {
    this.curPageManager = 1;
    this.curPageRecord = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学管师管理页', icon: 'fa-table'}
    ];
    this.payments = [];
    this.studentManagers = [];
    this.toChangeToManagers = [];
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
      this.undistributedStudents = students.filter(stu => !stu.isDis);
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

  handleManagerPageChange(page): void {
    this.curPageManager = 1;
  }

  handleRecordPageChange(page): void {
    this.curPageRecord = 1;
  }

  changeStuMaster(curManager): void {
    this.curStudentManager = curManager;
    this.toChangeToManagers = this.studentManagers
      .filter( manager => manager.id !== curManager.id )
      .map( manager => ({id: manager.id, text: manager.name}) );
    this.newAssignEmployeeId = this.toChangeToManagers.length ? this.toChangeToManagers[0].id : '';
  }

  setNewStuManager($event): void {
    this.newAssignEmployeeId = $event.value;
  }

  reAssignStuMaster(): void {
    this.studentManagerBossService.reAssignTeacher(this.curStudentManager.id, this.newAssignEmployeeId)
      .then( () => {
        this.newAssignEmployeeId = '';
        this.curStudentManager = {};
      } );
  }

}
