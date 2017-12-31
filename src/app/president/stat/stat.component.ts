import { Component, OnInit } from '@angular/core';
import {PresidentService} from '../president.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.less']
})
export class StatComponent implements OnInit {

  startTime: number;
  curPageSignMoney: number;
  curPageRenewMoney: number;
  curPageClassHour: number;
  approve: string;
  approveRemark: string;
  signMoneyRecord: any;
  renewMoneyRecord: any;
  classHourRecord: any;
  contentHeader: any[];
  constructor(
    private presidentService: PresidentService
  ) { }

  ngOnInit() {

    this.startTime = new Date(1950, 0, 1).getTime();
    this.curPageSignMoney = 1;
    this.curPageRenewMoney = 1;
    this.curPageClassHour = 1;
    this.signMoneyRecord = {details: [], num: 0, total: 0};
    this.renewMoneyRecord = {details: [], num: 0, total: 0 };
    this.classHourRecord = { details: [], finishHour: 0, unFinishHour: 0, totalHour: 0};
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '签约/缴费/课时统计页', icon: 'fa-th-li'}
    ];

    this.fetchSignRecord('', '');
    this.fetchRenewRecord('', '');
    this.fetchClassHourRecord('', '');
  }

  fetchSignRecord(startTime?, endTime?): void {
    this.presidentService.fetchSignMoney(startTime, endTime).then( results => {
      this.signMoneyRecord = results;
    } );
  }

  fetchRenewRecord(startTime?, endTime?): void {
    this.presidentService.fetchRenewMoney(startTime, endTime).then( results => {
      this.renewMoneyRecord = results;
    } );
  }

  fetchClassHourRecord(startTime?, endTime?): void {
    this.presidentService.fetchClassHour(startTime, endTime).then( results => {
      this.classHourRecord = results;
    } );
  }

  handlePageChangeSignMoney(page): void {
    this.curPageSignMoney = page;
  }
  handlePageChangeRenewMoney(page): void {
    this.curPageRenewMoney = page;
  }
  handlePageChangeClassHour(page): void {
    this.curPageClassHour = page;
  }
  handleSignTimeRangeChange(value): void {
    console.log('triggered');
    this.fetchSignRecord(value.start, value.end);
  }
  handleRenewTimeRangeChange(value): void {
    this.fetchRenewRecord(value.start, value.end);
  }
  handleClassHourTimeRangeChange(value): void {
    this.fetchClassHourRecord(value.start, value.end);
  }
}
