import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  curPage: number;
  schedule: any[];
  courses: any[];
  teachers: any[];
  students: any[];
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
  ) {
    this.createSchedule = this.createSchedule.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  ngOnInit() {
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课表管理页', icon: 'fa-users'}
    ];
    this.filterTimeRange = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.filterTeacherName = '';
    this.filterCourseName = '';
    this.filterScheduleState = '';
    this.schedule = [];
    this.teachers = [];
    this.students = [];
    this.fetchSchedule();
    this.fetchCourse();
    this.setCurSchedule();
  }

  /*课表查看功能*/
  fetchSchedule(): void {
    this.stmanagerService.fetchSchedule().then( schedule => {
      this.schedule = schedule;
    } );
  }

  changeFilterScheduleState($event): void {
    this.curPage = 1;
    this.filterScheduleState = $event.value === 'ALL' ? '' : $event.value;
  }

  handleTimeRangeChange($event): void {
    this.curPage = 1;
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
      const curCourseId = course[0]['id'];
      this.scheduleEvent.courseId = curCourseId;
      this.fetchTeachersByCourseId(curCourseId);
      this.fetchScheduleStu(curCourseId);
    } );
  }
  // 获取对应课程的授课教师
  fetchTeachersByCourseId(courseId): any {
    return this.stmanagerService.fetchTeachersByCourseId(courseId).then( teachers => {
      this.teachers = teachers;
      this.scheduleEvent.employeeId = this.scheduleEvent.employeeId || this.teachers[0].id;
      return this.teachers;
    } );
  }
  // 初始化新课表
  setCurSchedule(): void {
    this.scheduleEvent = {
      courseId: '',
      courseName: '',
      employeeId: '',
      teacherName: '',
      finish: false,
      endTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 24).getTime(),
      startTime: Date.now(),
      studyTime: 0,
      studentIds:   [],
    };
  }
  // 创建课表时切换课表处理函数
  handleCourseSwitch($event, courseScheduleId?: string): void {
    this.scheduleEvent.courseId = $event.value;
    this.fetchTeachersByCourseId($event.value);
    this.fetchScheduleStu($event.value, courseScheduleId);
    const curCourse = this.findCourseById($event.value);
    this.scheduleEvent.courseName = curCourse.name;
  }
  // 切换教师时设定新的教师ID
  handleTeacherSwitch($event): void {
    this.scheduleEvent.employeeId = $event.value;
    const curTeacher = this.findTeacherById($event.value);
    this.scheduleEvent.teacherName = (curTeacher || {}).name;
  }
  // 通过课程ID搜索教师
  findTeacherById(teacherId): any {
    return this.teachers.find( teacher => teacher.id === teacherId );
  }
  // 通过课程ID搜索课程系你先
  findCourseById(courseId): any {
    return this.courses.find( course => course.id === courseId );
  }
  // 设定创建课程的上课时间
  setScheduleTime($event): void {
    this.scheduleEvent.startTime = $event.start;
    this.scheduleEvent.endTime = $event.end;
  }
  // 根据课程ID获取报名该课程的学生
  fetchScheduleStu(courseId, courseScheduleId?: string): void {
    this.stmanagerService.fetchStudents(courseId, courseScheduleId).then( students => {
      if (courseScheduleId) {
        students.forEach( student => {
          student.selected = student.inCourse;
        } );
      }
      this.students = students;
    } );
  }
  // 分配学生的时候
  // 创建课表分配学生的时候是否未选中任何学生
  ifZeroStuChosen(): boolean {
    return this.students.every( stu => !stu.selected );
  }
  // 创建课表
  createSchedule(): void {
    console.log(this.scheduleEvent);
    this.students.forEach( stu => {
      if (stu.selected) {
        this.scheduleEvent.studentIds.push(stu.id);
      }
    } );
    this.stmanagerService.createSchedule(this.scheduleEvent, '创建').then( result => {
      this.scheduleEvent.courseScheduleId = result.id;
      this.schedule.unshift(this.scheduleEvent);
      this.schedule = [...this.schedule];
    } );
  }

  updateSchedule(): void {
    this.scheduleEvent.studentIds =  [];
    this.students.forEach( student => {
      if (student.selected) {
        this.scheduleEvent.studentIds.push(student.id);
      }
    } );
    this.stmanagerService.createSchedule(this.scheduleEvent, '更新').then( () => {
      this.fetchSchedule();
    } );
  }

  resetStudents(): void {
    this.scheduleEvent.studyTime = 0;
    this.students.forEach( student => student.selected = false );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
