import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StmanagerService} from '../stmanager.service';

@Component({
  selector: 'app-student-class-period',
  templateUrl: './student-class-period.component.html',
  styleUrls: ['./student-class-period.component.less']
})
export class StudentClassPeriodComponent implements OnInit {

  contentHeader: Sidebar[];
  stuCourseHourStats: any[];
  curStatScore: any;
  curStat: any;
  filterCourseName: string;
  filterStudentName: string;
  buyTimeRange: {
    start: number,
    end: number,
  };
  constructor(
    private stManagerService: StmanagerService
  ) {
    this.updateStuScore = this.updateStuScore.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生课时管理', icon: 'fa-users'}
    ];
    this.curStat = {};
    this.curStatScore = '';
    this.filterCourseName = '';
    this.filterStudentName = '';
    this.buyTimeRange = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Date.now(),
    };
    this.fetchStudentStat();
  }

  fetchStudentStat(): void {
    this.stManagerService.fetchStudentStat().then( data => {
      this.stuCourseHourStats = data;
    } );
  }

  handleTimeRangeChange($event): void {
    this.buyTimeRange = {
      start: $event.start,
      end: $event.end,
    };
  }

  updateStuScore(): void {
    const courseId = this.curStat.courseId;
    const score = this.curStatScore;
    const studentId = this.curStat.studentId;
    this.stManagerService.updateStuScore(courseId, score, studentId).then( result => {
      this.curStat.score = this.curStatScore;
    } );
  }
}
