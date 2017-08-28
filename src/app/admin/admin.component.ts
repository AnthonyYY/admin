import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {School} from '../common/school';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  schools: Array<School>;
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '用户列表',
        routerLink: ['users'],
        icon: 'fa-users'
      },
      {
        name: '校区列表',
        routerLink: ['schools'],
        icon: 'fa-building'
      },
    ];
  }
}
