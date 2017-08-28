import { Component, OnInit } from '@angular/core';
import {StmanagerService} from '../stmanager.service';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-renews-returns',
  templateUrl: './renews-returns.component.html',
  styleUrls: ['./renews-returns.component.less']
})
export class RenewsReturnsComponent implements OnInit {
  contentHeader: Sidebar[];
  assets: any[];
  curAsset: any;
  filterStuName: string;
  withDrawEvent: {
    returnAmount: any,
    remark: string,
    studentId: string
  };
  constructor(
    private stManagerService: StmanagerService
  ) {
    this.drawbackMoney = this.drawbackMoney.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生退费管理页', icon: 'fa-exchange'}
    ];
    this.assets = [];
    this.filterStuName = '';
    this.curAsset = {};
    this.withDrawEvent = {returnAmount: '', remark: '', studentId: ''};

    this.fetchStuAssets();
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
}
