import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {CounselorService} from '../counselor.service';
import {payType} from '../../common/enum';

@Component({
  selector: 'app-sign-record',
  templateUrl: './sign-record.component.html',
  styleUrls: ['./sign-record.component.less']
})
export class SignRecordComponent implements OnInit {
  curPage: number;
  contentHeader: Sidebar[];
  signRecord: any[];
  totalMoney: number | string;
  studentFilterName: string;
  filterPayTime: any;
  payType: any;
  constructor(
    private counselorService: CounselorService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.fetchSignRecords();
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '签约详情页', icon: 'fa-file-excel-o'}
    ];
    this.signRecord = [];
    this.totalMoney = 0;
    this.studentFilterName = '';
    this.filterPayTime = { start: new Date(new Date().getFullYear() + '-01-01').getTime(), end: Infinity };
    this.payType = payType;
  }

  fetchSignRecords(): void{
    this.counselorService.fetchSignRecord().then( data => {
      this.signRecord = data.detail;
      this.totalMoney = data.totalMoney;
    } );
  }

  setPayTimeRange($event): void {
    this.curPage = 1;
    this.filterPayTime = {
      start: $event.start,
      end: $event.end,
    };
  }

  handleChangePage(page): void  {
    this.curPage = page;
  }
}
