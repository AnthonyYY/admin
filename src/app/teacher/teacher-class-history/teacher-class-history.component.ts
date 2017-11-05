import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-class-history',
  templateUrl: './teacher-class-history.component.html',
  styleUrls: ['./teacher-class-history.component.less']
})
export class TeacherClassHistoryComponent implements OnInit {

  filterCourseName: string;
  filterCourseState: string;
  contentHeader = [];
  classRecord = [];
  curPage: number;
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.filterCourseName = '';
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学记录', icon: 'fa-list'}
    ];
    this.fetchClassRecord();
  }
  fetchClassRecord(): void {
    this.teacherService.fetchClassRecord().then( (record) => {
      this.classRecord = record;
      console.log(this.classRecord);
    } );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }

  switchCourseState($event): void {
    this.curPage = 1;
    this.filterCourseState = $event.value === 'ALL' ? '' : $event.value;
  }
}
