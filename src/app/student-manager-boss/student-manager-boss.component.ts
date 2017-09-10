import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-student-manager-boss',
  templateUrl: './student-manager-boss.component.html',
  styleUrls: ['./student-manager-boss.component.less']
})
export class StudentManagerBossComponent implements OnInit {

  sidebarMenu: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '签约学员管理',
        routerLink: ['student-assignment'],
        icon: 'fa-graduation-cap'
      },
      {
        name: '退费申请审批',
        routerLink: ['drawback'],
        icon: 'fa-file-excel-o'
      },
      {
        name: '教学课表管理',
        routerLink: ['schedule-management'],
        icon: 'fa-th-list'
      },
      {
        name: '教师课时列表',
        routerLink: ['teacher-hours'],
        icon: 'fa-file-text-o'
      },
      {
        name: '学管师管理',
        routerLink: ['student-master-docs'],
        icon: 'fa-table'
      }
    ];
  }

}
