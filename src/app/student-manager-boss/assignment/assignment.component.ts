import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StudentManagerBossService} from '../student-manager-boss.service';
import {genderList} from '../../common/enum';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.less']
})
export class AssignmentComponent implements OnInit {

  contentHeader: Sidebar[];
  students: any[];
  studentFilterName: string;
  studentFilterPhone: string;
  studentFilterGender: string;
  genders: any;
  constructor(
    private studentMangerBossService: StudentManagerBossService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '签约学员信息管理', icon: 'fa-table'}
    ];
    this.students = [];
    this.studentFilterName = '';
    this.studentFilterPhone = '';
    this.studentFilterGender = '';
    this.genders = genderList;

    this.fetchUndistributedStudents();
  }

  fetchUndistributedStudents(): void {
    this.studentMangerBossService
      .fetchUndistributedStudents()
      .then( students => this.students = students );
  }

  switchFilterGender($event): void {
    this.studentFilterGender = $event.value === 'ALL' ? '' : $event.value;
  }

}
