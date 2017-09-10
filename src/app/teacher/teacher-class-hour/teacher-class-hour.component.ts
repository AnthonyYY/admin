import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-class-hour',
  templateUrl: './teacher-class-hour.component.html',
  styleUrls: ['./teacher-class-hour.component.less']
})
export class TeacherClassHourComponent implements OnInit {

  curPage: number;
  classHourRecords: any[];
  contentHeader: any[];
  classHourTotal: number;
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.classHourRecords = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课时', icon: 'fa-list'}
    ];
    this.classHourTotal = 0;
    this.fetchClassHourStats();
  }

  fetchClassHourStats(): void {
    this.teacherService.fetchClassHourStat().then( data => {
      this.classHourRecords = data.detail;
      this.classHourTotal = data.totalHours;
    } );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
