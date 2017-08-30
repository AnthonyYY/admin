import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-to-approvement',
  templateUrl: './to-approvement.component.html',
  styleUrls: ['./to-approvement.component.less']
})
export class ToApprovementComponent implements OnInit {

  pendingApproval: any[];
  contentHeader: any[];

  constructor(
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.pendingApproval = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '退费审批列表页', icon: 'fa-list'}
    ];
    this.fetchPendingApprovals();
  }

  fetchPendingApprovals(): void {
    this.schoolService.fetchPendingApproval( 'BACK_MONEY', 'WAIT_AUDIT' ).then( records => {
      this.pendingApproval = records;
    } );
  }
}
