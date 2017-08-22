import { Component, OnInit } from '@angular/core';
import {ConsultantMainService} from '../consultant-main.service';
import {Sidebar} from '../../sidebar/sidebar';
import {states} from '../../common/state'
import {state} from '../../common/state'
import {CounselorService} from '../../counselor/counselor.service';

@Component({
  selector: 'app-consult-record',
  templateUrl: './consult-record.component.html',
  styleUrls: ['./consult-record.component.less']
})
export class ConsultRecordComponent implements OnInit {

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
    this.filterState = $event.value === 'ALL' ? '': $event.value;
  }

  switchState(){
    this.counselorService.switchState(this.curRecord.studentId).then( success => {
      if (success) {
        this.curRecord.status = 'CONNECTION';
      }
    } );
  }
}
