import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-tc-director',
  templateUrl: './tc-director.component.html',
  styleUrls: ['./tc-director.component.less']
})
export class TcDirectorComponent implements OnInit {

  sidebarMenu: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '教学课程管理',
        routerLink: ['course'],
        icon: 'fa-table'
      },
      {
        name: '教学班组管理',
        routerLink: ['grade'],
        icon: 'fa-th-list'
      }
    ];
  }

}
