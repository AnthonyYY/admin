import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {UserService} from '../common/user.service';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.less']
})
export class CounselorComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '学生资产信息',
        routerLink: ['students-asset'],
        icon: 'fa-file'
      },
      {
        name: '学生列表管理',
        routerLink: ['students'],
        icon: 'fa-graduation-cap'
      },
      {
        name: '退费申请记录',
        routerLink: ['drawback-application'],
        icon: 'fa-file-text-o'
      },
      {
        name: '个人签约记录',
        routerLink: ['sign-record'],
        icon: 'fa-file-excel-o'
      }
    ];

    this.userService.userInfoChange.subscribe( roleId => {
      if ( roleId === 'CONSULTANT_BOSS' ) {
        this.sidebarMenu.push(
          {
            name: '咨询师签约记录',
            routerLink: ['counselors-signs'],
            icon: 'fa-file-archive-o'
          },
          {
            name: '学生退费审核',
            routerLink: ['drawback-auditing'],
            icon: 'fa-file-excel-o'
          }
        );
      }
    } );
  }

}
