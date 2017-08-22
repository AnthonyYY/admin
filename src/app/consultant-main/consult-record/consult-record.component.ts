import { Component, OnInit } from '@angular/core';
import {ConsultantMainService} from '../consultant-main.service';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-consult-record',
  templateUrl: './consult-record.component.html',
  styleUrls: ['./consult-record.component.less']
})
export class ConsultRecordComponent implements OnInit {

  contentHeader: Sidebar[];
  consultRecords: Array<any>;
  constructor(
    private consultantService: ConsultantMainService,
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '咨询师咨询记录页', icon: 'fa-book'}
    ];
    this.consultRecords = [];
    this.fetchConsultRecord();
  }

  fetchConsultRecord(): void {
    this.consultantService.fetchConsultRecord().then( records => {
      this.consultRecords = records;
    } );
  }

}
