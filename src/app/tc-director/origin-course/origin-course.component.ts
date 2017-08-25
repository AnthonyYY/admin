import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';
import {courseTypeList, courseTypeMap} from '../../common/enum';
import {TeacherDirectorService} from '../teacher-director.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-origin-course',
  templateUrl: './origin-course.component.html',
  styleUrls: ['./origin-course.component.less']
})
export class OriginCourseComponent implements OnInit {

  contentHeader: Sidebar[];
  grades: any[];
  courses: any[];
  dynamicGradeMap: any;
  courseTypeMap: any;
  courseTypeList: any[];
  constructor(
    private courseService: SchoolService,
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课程管理页', icon: 'fa-book'}
    ];
    this.dynamicGradeMap = {};
    this.courseTypeMap = courseTypeMap;
    this.courseTypeList = courseTypeList;
    this.fetchCourse();
    // this.fetchGrades().then(grades => this.createGradeMap(grades));
  }
  fetchCourse(): void {
    this.courseService.fetchCourses().then( courses => this.courses = courses );
  }
  fetchGrades(): Promise<any> {
    return this.courseService.fetchGrades().then( grades => {
      this.grades = grades;
      return grades;
    } )
  }
  createGradeMap(grades): void {
    grades.forEach( grade => {
      this.dynamicGradeMap[grade.id] = grade.name;
    } )
  }
}
