import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-consultant-main',
  templateUrl: './consultant-main.component.html',
  styleUrls: ['./consultant-main.component.less']
})
export class ConsultantMainComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '咨询师签约统计',
        routerLink: ['consultation-record'],
        icon: 'fa-files-o'
      },
      {
        name: '咨询师咨询记录',
        routerLink: ['consult-record'],
        icon: 'fa-file-excel-o'
      },
      {
        name: '未分配学生管理',
        routerLink: ['unallocated-students'],
        icon: 'fa-graduation-cap'
      },
      {
        name: '退费申请审核',
        routerLink: ['drawbacks-auditing'],
        icon: 'fa-file-text-o'
      }
    ];
  }


}
