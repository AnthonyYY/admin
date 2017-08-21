import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {SchoolService} from '../../common/school.service';
import {courseTypeMap} from '../../common/course-type';
import {courseTypeList} from '../../common/course-type';

@Component({
  selector: 'app-students-asset',
  templateUrl: './students-asset.component.html',
  styleUrls: ['./students-asset.component.less']
})
export class StudentsAssetComponent implements OnInit {

  contentHeader: Sidebar[];
  allStuAsset: any[];
  courses: Array<any>;
  chosenCourse: Array<any>;
  curChosenCourse: any;
  curStuAsset: any;
  courseTypeMap: any;
  courseTypeList: any;
  filterStuName: string;
  filterCourseName: string;
  filterCourseType: string;
  filterGrade: string;
  constructor(
    private counselorService: CounselorService,
    private schoolService: SchoolService
  ) {
    this.addChosenCourse = this.addChosenCourse.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生资产信息页', icon: 'fa-graduation-cap'}
    ];
    this.allStuAsset = [];
    this.curStuAsset = {};
    this.courses = [];
    this.chosenCourse = [];
    this.curChosenCourse = {};
    this.courseTypeMap = courseTypeMap;
    this.courseTypeList = courseTypeList;
    this.filterStuName = '';
    this.filterCourseName = '';
    this.filterCourseType = '';
    this.filterGrade = '';
    this.fetchStuAsset();
    this.fetchCourses();
  }

  fetchStuAsset(): void {
    this.counselorService.fetchStuAsset().then( data => {
      this.allStuAsset = data;
    } );
  }

  fetchCourses(): void {
    this.schoolService.fetchCourses().then( courses => this.courses = courses );
  }

  setCurStuAsset(asset): void {
    this.curStuAsset = asset;
  }

  switchCourseType($event): void{
    this.filterCourseType = $event.value === 'ALL' ? '' : $event.value;
  }

  setCurChosenCourse(course):void {
    this.curChosenCourse = course;
  }

  addChosenCourse(): void {
    this.chosenCourse.push({...this.curChosenCourse});
  }

  rmChosenCourse(course): void {
    const toRemoveIdx = this.chosenCourse.indexOf(course);
    this.chosenCourse.splice(toRemoveIdx, 1);
  }
}
