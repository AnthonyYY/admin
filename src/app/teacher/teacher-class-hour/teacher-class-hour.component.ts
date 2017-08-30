import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-class-hour',
  templateUrl: './teacher-class-hour.component.html',
  styleUrls: ['./teacher-class-hour.component.less']
})
export class TeacherClassHourComponent implements OnInit {

  classHourRecords: any[];
  contentHeader: any[];
  classHourTotal: number;
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.classHourRecords = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课时', icon: 'fa-list'}
    ];
    this.classHourTotal = 0;
    this.fetchClassHourStats();
  }

  fetchClassHourStats(): void {
    this.teacherService.fetchSchedules().then( data => {
      this.classHourRecords = data.details;
      this.classHourTotal = data.totalHours;
    } );
  }
}
