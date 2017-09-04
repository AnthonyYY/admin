import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';
import {courseTypeList, courseTypeMap} from '../../common/enum';
import {TeacherDirectorService} from '../teacher-director.service';

@Component({
  selector: 'app-origin-course',
  templateUrl: './origin-course.component.html',
  styleUrls: ['./origin-course.component.less']
})
export class OriginCourseComponent implements OnInit {

  contentHeader: Sidebar[];
  curCourse: any;
  assignment: { courseId: string, teacherIds: string[] };
  grades: any[];
  courses: any[];
  dynamicGradeMap: any;
  dynamicGradeList: any[];
  courseTypeMap: any;
  courseTypeList: any[];
  teachers: any[];
  courseTeachers: any[];
  assignedTeachers: any[];

  filterCourseName: string;
  filterCourseType: string;
  constructor(
    private schoolService: SchoolService,
    private teacherDirectorService: TeacherDirectorService,
  ) {
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.assignTeachers = this.assignTeachers.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课程管理页', icon: 'fa-book'}
    ];
    this.assignment = { courseId: '', teacherIds: [] };
    this.dynamicGradeMap = {};
    this.dynamicGradeList = [];
    this.courseTypeMap = courseTypeMap;
    this.courseTypeList = courseTypeList;
    this.teachers = [];
    this.courseTeachers = [];
    this.fetchCourse();
    this.fetchTeachers();
    this.initCurCourse();
    this.fetchGrades().then(grades => {
      this.createGradeMap(grades);
    });

    this.filterCourseName = '';
    this.filterCourseType = '';
  }
  initCurCourse(course?): void {
    if (course) {
      this.curCourse = { ...course };
    } else {
      let gradeId = '';
      if (this.dynamicGradeList.length) {
        gradeId = this.dynamicGradeList[0].id;
      }
      this.curCourse = {
        gradeId: gradeId,
        name: '',
        studentNum: '',
        studyHour: '',
        type: 'NORMALGROUP'
      };
    }
  }
  fetchCourse(): void {
    this.schoolService.fetchCourses().then( courses => this.courses = courses );
  }
  fetchGrades(): Promise<any> {
    return this.schoolService.fetchGrades().then( grades => {
      this.grades = grades;
      return grades;
    } );
  }
  createGradeMap(grades): void {
    grades.forEach( grade => {
      this.dynamicGradeMap[grade.id] = grade.name;
      this.dynamicGradeList.push({id: grade.id, text: grade.name});
      this.dynamicGradeList = [...this.dynamicGradeList];
    } );
  }

  handleGradeChange($event): void {
    this.curCourse.gradeId = $event.value;
  }

  handleCourseTypeChange($event): void {
    this.curCourse.type = $event.value;
  }

  createCourse(): void {
    this.teacherDirectorService.createCourse( this.curCourse ).then( newCourseId => {
      const curGradeInfo = this.findGradeById(this.curCourse.gradeId);
      this.curCourse.id = newCourseId;
      this.curCourse.selectedNum = 0;
      this.curCourse.studentNum = 0;
      this.curCourse.backNum = 0;
      this.curCourse.price = curGradeInfo.price;
      this.courses.unshift({...this.curCourse});
    } );
  }

  deleteCourse(): void {
    const courseId = this.curCourse.id;
    const toDeleteCourse = this.findCourseById(courseId);
    const toDeleteIndex = this.courses.indexOf(toDeleteCourse);
    this.teacherDirectorService.deleteCourse(courseId).then( success => {
      if (success) {
        this.courses.splice(toDeleteIndex, 1);
      }
    } );
  }

  updateCourse(): void {
    this.teacherDirectorService.updateCourse(this.curCourse).then( (success) => {
      const curCourse = this.courses.find( course => this.curCourse.id === course.id );
      const toUpdateCourseIndex = this.courses.indexOf(curCourse);
      this.courses[toUpdateCourseIndex] = {...this.curCourse};
    } );
  }

  findCourseById(id): any {
    return this.courses.find( course => course.id === id );
  }

  findGradeById(id): any {
    return this.grades.find( grade => grade.id === id );
  }

  fetchTeachers(): void {
    this.schoolService.fetchTeachers().then( teachers => {
      this.teachers = teachers;
      this.teachers.forEach( teacher => {
        teacher.text = teacher.name;
      } );
    } );
  }

  assignTeachers(): void {
    this.teacherDirectorService.assignTeachers(this.assignment);
  }

  handleSelectEvent($event): void {
    this.assignment.teacherIds = $event.value;
  }

  changeFilterCourseState($event): void {
    this.filterCourseType = $event.value === 'ALL' ? '' : $event.value;
  }

  fetchTeachersByCourseId( courseId ): void {
    this.teacherDirectorService
      .fetchTeachersByCourseId(courseId)
      .then( teachers => this.courseTeachers = teachers );
  }
}
