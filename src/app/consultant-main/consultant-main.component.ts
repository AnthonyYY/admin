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
        name: '学生列表',
        routerLink: ['unallocated-students'],
        icon: 'fa-graduation-cap'
      },
    ];
  }

}
