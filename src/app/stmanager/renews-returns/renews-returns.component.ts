import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Sidebar} from '../../sidebar/sidebar';
import {payType} from '../../common/enum';

@Component({
  selector: 'app-renews-returns',
  templateUrl: './renews-returns.component.html',
  styleUrls: ['./renews-returns.component.less']
})
export class RenewsReturnsComponent implements OnInit {

  payType = payType;
  curPage: number;
  contentHeader: Sidebar[];
  assets: any[];
  curAsset: any;
  filterStuName: string;
  withDrawEvent: {
    returnAmount: any,
    remark: string,
    studentId: string
  };
  paymentOrReturnRecords: {
    detail: any[],
    totalMoney: number,
    totalBack: number,
  };
  constructor(
    private stManagerService: StmanagerService
  ) {
    this.drawbackMoney = this.drawbackMoney.bind(this);
  }

  ngOnInit() {
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生退费管理页', icon: 'fa-exchange'}
    ];
    this.paymentOrReturnRecords = {
      detail: [],
      totalMoney: 0,
      totalBack: 0,
    };
    this.assets = [];
    this.filterStuName = '';
    this.curAsset = {};
    this.withDrawEvent = {returnAmount: '', remark: '', studentId: ''};

    this.fetchStuAssets();
    this.fetchPaymentOrReturnRecords();
  }

  fetchStuAssets(): void {
    this.stManagerService.fetchStuAssets().then( assets => {
      this.assets = assets;

    } );
  }

  drawbackMoney(): void {
    this.withDrawEvent.studentId = this.curAsset.studentId;
    this.stManagerService.drawback(this.withDrawEvent);
  }

  handlePageChange(page): void {
    this.curPage = page;
  }

  fetchPaymentOrReturnRecords(): void {
    this.stManagerService.fetchPaymentOrReturnRecords().then( result => {
      this.paymentOrReturnRecords = result;
    } );
  }
}
