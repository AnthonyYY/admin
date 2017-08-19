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
        name: '课表管理',
        routerLink: ['schedule'],
        icon: 'fa-table'
      },
      {
        name: '学生列表',
        routerLink: ['students'],
        icon: 'fa-graduation-cap'
      },
      {
        name: '学生课表',
        routerLink: ['student-schedule'],
        icon: 'fa-calendar'
      },
      {
        name: '学生课时',
        routerLink: ['stu-class-period'],
        icon: 'fa-clock-o'
      },
    ];
  }
}
