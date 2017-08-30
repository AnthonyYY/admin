import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-personnel-cashier',
  templateUrl: './personnel-cashier.component.html',
  styleUrls: ['./personnel-cashier.component.less']
})
export class PersonnelCashierComponent implements OnInit {

  sidebarMenu: Array<Sidebar>;
  constructor() { }

  ngOnInit() {
    this.sidebarMenu = [
      {
        name: '学生缴费管理',
        routerLink: ['fees'],
        icon: 'fa-graduation-cap'
      }
    ];
  }

}
