import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.less']
})
export class CounselorComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '学生资产信息',
        routerLink: ['students-asset'],
        icon: 'fa-file'
      },
      {
        name: '学生列表',
        routerLink: ['students'],
        icon: 'fa-graduation-cap'
      },
    ];
  }

}