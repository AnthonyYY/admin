import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-drawback',
  templateUrl: './drawback.component.html',
  styleUrls: ['./drawback.component.less']
})
export class DrawbackComponent implements OnInit {

  curAudit: any;
  approve: string;
  approveRemark: string;
  auditPendingRecords: any[];
  auditSuccessRecords: any[];
  auditFailedRecords: any[];
  contentHeader: any[];

  constructor(
    private schoolService: SchoolService
  ) {
    this.checkBackApplication = this.checkBackApplication.bind(this);
  }

  ngOnInit() {
    this.curAudit = {};
    this.approve = 'AUDIT_SUCCESS';
    this.approveRemark = '';
    this.auditPendingRecords = [];
    this.auditSuccessRecords = [];
    this.auditFailedRecords = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '退费审批列表页', icon: 'fa-list'}
    ];
    this.fetchAuditPendingRecord();
    this.fetchAuditSuccessRecords();
    this.fetchAuditFailedRecords();
  }

  fetchAuditPendingRecord(): void {
    this.schoolService.fetchPendingApproval( 'BACK_MONEY', 'WAIT_AUDIT' ).then( records => {
      this.auditPendingRecords = records;
    } );
  }

  fetchAuditSuccessRecords(): void {
    this.schoolService.fetchPendingApproval( 'BACK_MONEY', 'AUDIT_SUCCESS' ).then( records => {
      this.auditSuccessRecords = records;
    } );
  }

  fetchAuditFailedRecords(): void {
    this.schoolService.fetchPendingApproval( 'BACK_MONEY', 'AUDIT_FAIL' ).then( records => {
      this.auditFailedRecords = records;
    } );
  }

  checkBackApplication() {
    this.schoolService.audit(this.approve, this.curAudit.id, this.approveRemark).then(success => {
        if ( success ) {
          const toRemoveRecordIndex = this.auditPendingRecords.indexOf(this.curAudit);
          this.auditPendingRecords.splice(toRemoveRecordIndex, 1);
        }
      }
    );
  }

}
