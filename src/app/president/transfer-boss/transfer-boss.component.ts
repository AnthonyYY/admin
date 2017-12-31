import { Component, OnInit } from '@angular/core';
import {PresidentService} from '../president.service';
import {roles} from '../../common/enum';

@Component({
  selector: 'app-transfer-boss',
  templateUrl: './transfer-boss.component.html',
  styleUrls: ['./transfer-boss.component.less']
})
export class TransferBossComponent implements OnInit {

  auditPendingRecords: any[];
  auditSuccessRecords: any[];
  auditFailedRecords: any[];

  consults: any[];
  managers: any[];

  curAudit: any;
  approve: string;
  approveRemark: string;
  newConsult: string;
  newStuManager: string;
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

    this.presidentService.fetchRoles(roles.consultant)
      .then( roles => {
        roles.forEach( role => role.text = role.name );
        this.consults = roles;
        this.newConsult = roles.length ? roles[0].id : '';
      } );
    this.presidentService.fetchRoles(roles.studentmanager)
      .then( roles => {
        roles.forEach( role => role.text = role.name );
        this.managers = roles;
        this.newStuManager = roles.length ? roles[0].id : '';
      } );
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
    this.presidentService.checkBackApplication(
      this.approve,
      this.curAudit.id,
      this.approveRemark,
      this.newStuManager,
      this.newConsult).then( success => {
      if (success) {
        const toRemoveRecordIndex = this.auditPendingRecords.indexOf(this.curAudit);
        this.auditPendingRecords.splice(toRemoveRecordIndex, 1);
      }
    } );
  }

  setNewConsult($event): void {
    this.newConsult = $event.value;
  }

  setNewManager($event): void {
    this.newStuManager = $event.value;
  }
}
