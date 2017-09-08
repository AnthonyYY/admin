import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.less']
})
export class TeacherScheduleComponent implements OnInit {

  curPage: number;
  schedules: any[];
  contentHeader: any[];
  filterCourseName: string;
  filterCourseState: boolean | '';
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.schedules = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课表', icon: 'fa-table'}
    ];
    this.filterCourseName = '';
    this.filterCourseState = '';
    this.fetchSchedules();
  }

  fetchSchedules(): void {
    this.teacherService.fetchSchedules().then( schedules => {
      this.schedules = schedules;
    } );
  }

  switchCourseState($event): void {
    this.curPage = 1;
    this.filterCourseState = $event.value === 'ALL' ? '' : $event.value;
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
