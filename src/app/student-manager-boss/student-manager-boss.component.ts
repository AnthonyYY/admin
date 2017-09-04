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
        name: '学管师管理',
        routerLink: ['student-master-docs'],
        icon: 'fa-table'
      }
    ];
  }

}
