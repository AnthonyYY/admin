import { Component, OnInit } from '@angular/core';
import {RoleService} from '../common/role.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.roleService.fetchRoleEnums();
  }

}
