import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.less']
})
export class TeacherScheduleComponent implements OnInit {

  schedules: any[];
  contentHeader: any[];
  filterCourseName: string;
  filterCourseState: boolean | '';
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
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
    this.filterCourseState = $event.value === 'ALL' ? '' : $event.value;
  }
}
