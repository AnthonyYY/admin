import { Component, OnInit } from '@angular/core';
import {PresidentService} from '../president.service';

@Component({
  selector: 'app-transfer-boss',
  templateUrl: './transfer-boss.component.html',
  styleUrls: ['./transfer-boss.component.less']
})
export class TransferBossComponent implements OnInit {

  auditPendingRecords: any[];
  auditSuccessRecords: any[];
  auditFailedRecords: any[];

  curAudit: any;
  approve: string;
  approveRemark: string;
  contentHeader: any[];
  constructor(
    private presidentService: PresidentService
  ) {
    this.checkBackApplication = this.checkBackApplication.bind(this);
  }

  ngOnInit() {
    this.auditPendingRecords = [];
    this.auditSuccessRecords = [];
    this.auditFailedRecords = [];

    this.curAudit = {};
    this.approve = 'AUDIT_SUCCESS';
    this.approveRemark = '';

    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '转校审核页', icon: 'fa-th-li'}
    ];

    this.fetchAuditPendingRecord();
    this.fetchAuditSuccessRecords();
    this.fetchAuditFailedRecords();
  }

  fetchAuditPendingRecord() {
    this.presidentService
      .fetchStuTransferAppRecords('CHANGE_SCHOOL', 'WAIT_AUDIT')
      .then( records => this.auditPendingRecords = records );
  }

  fetchAuditSuccessRecords() {
    this.presidentService
      .fetchStuTransferAppRecords('CHANGE_SCHOOL', 'AUDIT_SUCCESS')
      .then( records => this.auditSuccessRecords = records );
  }

  fetchAuditFailedRecords() {
    this.presidentService
      .fetchStuTransferAppRecords('CHANGE_SCHOOL', 'AUDIT_FAIL')
      .then( records => this.auditFailedRecords = records );
  }

  checkBackApplication(): void {
    this.presidentService.checkBackApplication(this.approve, this.curAudit.id).then( success => {
      if (success) {
        const toRemoveRecordIndex = this.auditPendingRecords.indexOf(this.curAudit);
        this.auditPendingRecords.splice(toRemoveRecordIndex, 1);
      }
    } );
  }
}
