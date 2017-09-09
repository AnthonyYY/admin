import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {ConsultantMainService} from '../../consultant-main/consultant-main.service';

@Component({
  selector: 'app-counselors-signed-records',
  templateUrl: './counselors-signed-records.component.html',
  styleUrls: ['./counselors-signed-records.component.less']
})
export class CounselorsSignedRecordsComponent implements OnInit {

  curPage: number;
  contentHeader: Sidebar[];
  counselorsSignRecords: any[];
  constructor(
    private consultantMainService: ConsultantMainService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '本校签约记录页', icon: 'fa-file-archive-o'}
    ];
    this.counselorsSignRecords = [];
    this.fetchSignRecords();
  }

  fetchSignRecords(): void {
    this.consultantMainService.fetchCounselorStat('').then( data => {
      this.counselorsSignRecords = data;
    } );
  }

  handlePageChange(page): void {
    this.curPage = page;
  }
}
