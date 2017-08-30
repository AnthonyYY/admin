import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {PersonnelService} from '../personnel.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  employees: any[];
  contentHeader: Sidebar[];
  constructor(
    private personnelService: PersonnelService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '员工列表管理页', icon: 'fa-users'}
    ];
    this.fetchEmployee();
  }

  fetchEmployee(): void {
    this.personnelService.fetchEmployee().then( employees => this.employees = employees );
  }

  createEmployee( employee ): void {

  }
}
