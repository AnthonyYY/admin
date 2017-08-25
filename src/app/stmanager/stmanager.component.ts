import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-stmanager',
  templateUrl: './stmanager.component.html',
  styleUrls: ['./stmanager.component.less']
})
export class StmanagerComponent implements OnInit {

  sidebarMenu: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '教学课表管理',
        routerLink: ['schedule'],
        icon: 'fa-table'
      },
      {
        name: '学生列表管理',
        routerLink: ['students'],
        icon: 'fa-graduation-cap'
      },
      {
        name: '学生课表管理',
        routerLink: ['student-schedule'],
        icon: 'fa-calendar'
      },
      {
        name: '学生课时列表',
        routerLink: ['stu-class-period'],
        icon: 'fa-clock-o'
      },
      {
        name: '续费/退费管理',
        routerLink: ['renews-returns'],
        icon: 'fa-credit-card'
      }
    ];
  }
}
