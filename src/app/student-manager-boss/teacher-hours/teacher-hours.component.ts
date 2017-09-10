import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StudentManagerBossService} from '../student-manager-boss.service';

@Component({
  selector: 'app-teacher-hours',
  templateUrl: './teacher-hours.component.html',
  styleUrls: ['./teacher-hours.component.less']
})
export class TeacherHoursComponent implements OnInit {

  curPage: number;
  contentHeader: Sidebar[];
  teacherHours: any[];
  filterTeacherName: string;
  filterTeacherPhone: string;
  constructor(
    private studentManagerBossService: StudentManagerBossService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学管师管理页', icon: 'fa-table'}
    ];
    this.teacherHours = [];
    this.filterTeacherName = '';
    this.filterTeacherPhone = '';
    this.fetchTeacherHours();
  }

  fetchTeacherHours(): void {
    this.studentManagerBossService.fetchTeacherHours().then( hours => this.teacherHours = hours );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
