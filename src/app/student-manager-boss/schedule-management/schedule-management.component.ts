import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StmanagerService} from '../../stmanager/stmanager.service';
import {StudentManagerBossService} from '../student-manager-boss.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.less']
})
export class ScheduleManagementComponent implements OnInit {

  curSchedule: any;
  curPage: number;
  filterTeacherName: string;
  filterCourseName: string;
  filterScheduleState: string;
  schedules: any[];
  contentHeader: Sidebar[];
  constructor(
    private stmanagerService: StmanagerService,
    private studentManagerBossService: StudentManagerBossService,
  ) {
    this.finishSchedule = this.finishSchedule.bind(this);
  }

  ngOnInit() {
    this.curSchedule = {};
    this.curPage = 1;
    this.filterTeacherName = '';
    this.filterCourseName = '';
    this.filterScheduleState = '';
    this.schedules = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学课表管理', icon: 'fa-th-list'}
    ];
    this.fetchSchedule();
  }

  fetchSchedule(): void {
    this.stmanagerService.fetchSchedule().then( schedules => {
      this.schedules = schedules;
    } );
  }

  changeFilterScheduleState($event): void {
    this.curPage = 1;
    this.filterScheduleState = $event.value === 'ALL' ? '' : $event.value;
  }

  handlePageChange(page): void {
    this.curPage = page;
  }

  finishSchedule(): void {
    this.studentManagerBossService.finishSchedule(this.curSchedule.courseScheduleId).then( success => {
      if ( success ) {
        this.curSchedule.finish = true;
      }
    } );
  }
}
