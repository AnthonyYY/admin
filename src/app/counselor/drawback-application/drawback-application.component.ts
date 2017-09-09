import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {auditState} from '../../common/enum';

@Component({
  selector: 'app-drawback-application',
  templateUrl: './drawback-application.component.html',
  styleUrls: ['./drawback-application.component.less']
})
export class DrawbackApplicationComponent implements OnInit {

  auditState = auditState;
  curPage: number;
  drawbackAppRecords: any[];
  contentHeader: Sidebar[];
  constructor(
    private counselorService: CounselorService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.drawbackAppRecords = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '退款申请记录页', icon: 'fa-file-excel-o'}
    ];
    this.fetchDrawbackAppRecords();
  }

  fetchDrawbackAppRecords(): void {
    this.counselorService
      .fetchDrawbackAppRecords()
      .then( records => this.drawbackAppRecords = records );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
