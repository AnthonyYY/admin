import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  contentHeader: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '员工列表管理页', icon: 'fa-users'}
    ];
  }

}
