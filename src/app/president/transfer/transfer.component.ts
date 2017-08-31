import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';
import {PresidentService} from '../president.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.less']
})
export class TransferComponent implements OnInit {

  schools: any[];
  contentHeader: any[];
  constructor(
    private schoolService: SchoolService
  ) {}

  ngOnInit() {
    this.schools = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '转校申请页', icon: 'fa-th-li'}
    ];

    this.fetchSchools();
  }

  fetchSchools(): void {
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
    } );
  }

}
