import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {

  sidebarMenu: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '教学课程',
        routerLink: ['teacher-schedule'],
        icon: 'fa-table'
      },
      {
        name: '教学课时',
        routerLink: ['teacher-class-hour'],
        icon: 'fa-th-list'
      }
    ];
  }

}
