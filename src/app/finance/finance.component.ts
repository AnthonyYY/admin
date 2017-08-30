import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.less']
})
export class FinanceComponent implements OnInit {

  sidebarMenu: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '退费审批列表',
        routerLink: ['to-approve'],
        icon: 'fa-table'
      },
      {
        name: '学生缴费日志',
        routerLink: ['stu-pay-stat'],
        icon: 'fa-th-list'
      },
      {
        name: '学生缴费统计',
        routerLink: ['stu-pay-record'],
        icon: 'fa-pie-chart'
      }
    ];
  }
}
