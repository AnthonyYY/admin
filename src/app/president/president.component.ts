import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.less']
})
export class PresidentComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor(

  ) { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '统计信息管理',
        routerLink: ['stats'],
        icon: 'fa-pie-chart'
      },
      {
        name: '退费申请管理',
        routerLink: ['refund'],
        icon: 'fa-file-excel-o'
      },
      {
        name: '转校申请管理',
        routerLink: ['transfer'],
        icon: 'fa-file-pdf-o'
      },
    ];
  }
}
