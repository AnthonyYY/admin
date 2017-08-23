import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Schedule} from './schedule';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  schedule: Schedule[];
  courses: any[];
  teachers: any[];
  contentHeader: Sidebar[];
  filterTeacherName: string;
  filterCourseName: string;
  filterScheduleState: any;
  filterTimeRange: {
    start: number,
    end: number
  };
  scheduleEvent: any;
  constructor(
    private stmanagerService: StmanagerService,
    private schoolService: SchoolService
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
    this.fetchCourse();
    this.initCurSchedule();
  }

  /*课表查看功能*/
  fetchSchedule(): void {
    this.stmanagerService.fetchSchedule().then( schedule => {
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
  // 获取课程列表
  fetchCourse(): void {
    this.schoolService.fetchCourses().then( course => {
      this.courses = course;
      let curCourseId = course[0]['id'];
      this.scheduleEvent.courseId = curCourseId;
      console.log(curCourseId);
      this.fetchTeachersByCourseId(curCourseId);
    } )
  }
  fetchTeachersByCourseId(courseId): void {
    this.stmanagerService.fetchTeachersByCourseId(courseId).then( teachers => {
      this.teachers = teachers;
    } )
  }
  // 初始化新课表
  initCurSchedule(): void{
    this.scheduleEvent = {
      courseId: '',
      employeeId: '',
      endTime: '',
      startTime: '',
      studyTime: '',
      studentIds: [],
    };
  }
  // 创建课表是切换课表处理函数
  handleCourseSwitch($event): void {
    this.scheduleEvent.courseId = $event.value;
    this.fetchTeachersByCourseId($event.value);
  }

}
