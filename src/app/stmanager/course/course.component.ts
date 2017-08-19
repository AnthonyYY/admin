import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Schedule} from './schedule';
import {Sidebar} from "../../sidebar/sidebar";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  schedule: Schedule[];
  contentHeader: Sidebar[];
  filterTeacherName: string;
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
      {name: '课程列表页', icon: 'fa-users'}
    ];
    this.filterTimeRange = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.filterTeacherName = '';
    this.filterScheduleState = '';
    this.schedule = [];
    this.fetchSchedule();
  }

  fetchSchedule(): void {
    this.stmanagerService.fetchSchedule().then( schedule => {
      console.log(schedule);
      this.schedule = schedule;
    } );
  }

  changeFilterScheduleState($event): void {
    this.filterScheduleState = $event.value;
  }

  handleTimeRangeChange($event): void {}
}
