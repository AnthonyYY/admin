import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {UserService} from '../common/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.less']
})
export class PresidentComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.sidebarMenu = [
      {
        name: '统计信息管理',
        routerLink: ['stats'],
        icon: 'fa-pie-chart'
      },
      {
        name: '退费审核管理',
        routerLink: ['refund'],
        icon: 'fa-file-excel-o'
      }
  ];
    this.userService.userInfoChange.subscribe( value => {
      if (value) {
        if (value === 'SCHOOLMASTER') {
          this.sidebarMenu.push(
            {
              name: '转校申请管理',
              routerLink: ['transfer'],
              icon: 'fa-file-pdf-o'
            }
          );
        }
      }
    } );
  }
}
