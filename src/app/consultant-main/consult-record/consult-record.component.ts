import { Component, OnInit } from '@angular/core';
import {ConsultantMainService} from '../consultant-main.service';
import {Sidebar} from '../../sidebar/sidebar';
import {states} from '../../common/enum'
import {state} from '../../common/enum'
import {CounselorService} from '../../counselor/counselor.service';

@Component({
  selector: 'app-consult-record',
  templateUrl: './consult-record.component.html',
  styleUrls: ['./consult-record.component.less']
})
export class ConsultRecordComponent implements OnInit {

  curPage: number;
  curRecord: any;
  contentHeader: Sidebar[];
  consultRecords: Array<any>;
  states: any;
  stateList: any;
  filterState: string;
  filterStuName: string;
  filterEmployeeName: string;
  constructor(
    private consultantService: ConsultantMainService,
    private counselorService: CounselorService,
  ) {
    this.switchState = this.switchState.bind(this);
  }

  ngOnInit() {
    this.curPage = 1;
    this.curRecord = {};
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '咨询师咨询记录页', icon: 'fa-book'}
    ];
    this.consultRecords = [];
    this.fetchConsultRecord();
    this.states = state;
    this.stateList = states;
    this.filterStuName = '';
    this.filterEmployeeName = '';
  }

  fetchConsultRecord(): void {
    this.consultantService.fetchConsultRecord().then( records => {
      this.consultRecords = records;
    } );
  }

  switchFilterState($event): void {
    this.curPage = 1;
    this.filterState = $event.value === 'ALL' ? '' : $event.value;
  }

  switchState(): void {
    this.counselorService.switchState(this.curRecord.studentId).then( success => {
      if (success) {
        this.curRecord.status = 'CONNECTION';
      }
    } );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
