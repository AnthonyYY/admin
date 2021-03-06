import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';
import {PresidentService} from '../president.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.less']
})
export class RefundComponent implements OnInit {

  approve: string;
  approveRemark: string;
  curAudit: any;
  auditingList: any[];
  auditApprovedList: any[];
  auditRejectedList: any[];
  contentHeader: any[];
  constructor(
    private schoolService: SchoolService,
    private presidentService: PresidentService,
  ) {
    this.checkBackApplication = this.checkBackApplication.bind(this);
  }

  ngOnInit() {
    this.approve = 'AUDIT_SUCCESS';
    this.approveRemark = '';
    this.curAudit = {};
    this.auditingList = [];
    this.auditApprovedList = [];
    this.auditRejectedList = [];
    this.contentHeader =     this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '退费审核管理', icon: 'fa-th-li'}
    ];

    this.fetchBackRecord();
    this.fetchAuditApprovedRecord();
    this.fetchAuditRejectRecord();
  }

  fetchBackRecord(): void {
    this.schoolService.fetchPendingApproval('BACK_MONEY', 'WAIT_AUDIT').then( results => {
      this.auditingList = results;
    } );
  }

  fetchAuditApprovedRecord(): void {
    this.schoolService.fetchPendingApproval('BACK_MONEY', 'AUDIT_SUCCESS').then( results => {
      this.auditApprovedList = results;
    } );
  }

  fetchAuditRejectRecord(): void {
    this.schoolService.fetchPendingApproval('BACK_MONEY', 'AUDIT_FAIL').then( results => {
      this.auditRejectedList = results;
    } );
  }

  checkBackApplication(): void {
    this.presidentService.audit(this.approve,  this.curAudit.id, this.approveRemark).then( success => {
      if (success) {
        const toRemoveIndex = this.auditingList.indexOf( this.curAudit );
        this.auditingList.splice(toRemoveIndex, 1);
      }
    } );
  }

}
