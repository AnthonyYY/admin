import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-drawback-approment',
  templateUrl: './drawback-approment.component.html',
  styleUrls: ['./drawback-approment.component.less']
})
export class DrawbackApprovalComponent implements OnInit {

  curAudit: any;
  approve: string;
  approveRemark: string;
  contentHeader: Sidebar[];
  pendingApps: any[];
  acceptedApps: any[];
  rejectedApps: any[];
  constructor(
    private schoolService: SchoolService
  ) {
    this.checkDrawbackApp = this.checkDrawbackApp.bind(this);
  }

  ngOnInit() {
    this.curAudit = {};
    this.approve = 'AUDIT_SUCCESS';
    this.approveRemark = '';
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '退款申请审核页', icon: 'fa-file-excel-o'}
    ];

    this.pendingApps = [];
    this.acceptedApps = [];
    this.rejectedApps = [];
    this.fetchPendingApp();
    this.fetchAcceptedApps();
    this.fetchRejectedApps();
  }

  fetchPendingApp(): void {
    this.schoolService.
    fetchPendingApproval('BACK_MONEY', 'WAIT_AUDIT')
      .then( records => this.pendingApps = records );
  }

  fetchAcceptedApps(): void {
    this.schoolService.
    fetchPendingApproval('BACK_MONEY', 'AUDIT_SUCCESS')
      .then( records => this.acceptedApps = records );
  }

  fetchRejectedApps(): void {
    this.schoolService.
    fetchPendingApproval('BACK_MONEY', 'AUDIT_FAIL')
      .then( records => this.rejectedApps = records );
  }

  checkDrawbackApp(): void {
    this.schoolService.audit(this.approve, this.curAudit.id, this.approveRemark).then( success => {
      if (success) {
        const curAuditIndex = this.pendingApps.indexOf(this.curAudit);
        this.pendingApps.splice(curAuditIndex, 1);
      }
    } );
  }

}
