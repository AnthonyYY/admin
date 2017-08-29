import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.less']
})
export class FeesComponent implements OnInit {

  contentHeader: Sidebar[];
  constructor() { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '缴费管理页', icon: 'fa-money'}
    ];
  }
}
