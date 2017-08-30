import { Component, OnInit } from '@angular/core';
import {PresidentService} from '../president.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.less']
})
export class StatComponent implements OnInit {

  approve: string;
  approveRemark: string;
  curAudit: any;
  signMoneyRecord: any;
  renewMoneyRecord: any;
  classHourRecord: any;
  contentHeader: any[];
  constructor(
    private presidentService: PresidentService
  ) { }

  ngOnInit() {
    this.signMoneyRecord = {details: [], num: 0, total: 0};
    this.renewMoneyRecord = {details: [], num: 0, total: 0 };
    this.classHourRecord = { details: [], finishHour: 0, unFinishHour: 0, totalHour: 0};
    this.contentHeader =     this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '签约/缴费/课时统计页', icon: 'fa-th-li'}
    ];

    this.fetchSignRecord();
    this.fetchRenewRecord();
    this.fetchClassHourRecord();
  }

  fetchSignRecord(): void {
    this.presidentService.fetchSignMoney().then( results => {
      this.signMoneyRecord = results;
    } );
  }

  fetchRenewRecord(): void {
    this.presidentService.fetchRenewMoney().then( results => {
      this.renewMoneyRecord = results;
    } );
  }

  fetchClassHourRecord(): void {
    this.presidentService.fetchClassHour().then( results => {
      this.classHourRecord = results;
    } );
  }

}
