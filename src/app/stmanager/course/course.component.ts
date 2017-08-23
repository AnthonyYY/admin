import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Schedule} from './schedule';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  schedule: Schedule[];
  contentHeader: Sidebar[];
  filterTeacherName: string;
  filterCourseName: string;
  filterScheduleState: any;
  filterTimeRange: {
    start: number,
    end: number
  };
  constructor(
    private stmanagerService: StmanagerService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '课表页', icon: 'fa-users'}
    ];
    this.filterTimeRange = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.filterTeacherName = '';
    this.filterCourseName = '';
    this.filterScheduleState = '';
    this.schedule = [];
    this.fetchSchedule();
  }

  /*课表查看功能*/
  fetchSchedule(): void {
    this.stmanagerService.fetchSchedule().then( schedule => {
      console.log(schedule);
      this.schedule = schedule;
    } );
  }

  changeFilterScheduleState($event): void {
    console.log($event);
    this.filterScheduleState = $event.value === 'ALL' ? '' : $event.value;
  }

  handleTimeRangeChange($event): void {
    this.filterTimeRange = {
      start: $event.start,
      end: $event.end,
    };
  }

  /*课表创建功能*/
}
