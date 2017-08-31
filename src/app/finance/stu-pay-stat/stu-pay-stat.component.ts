import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';

@Component({
  selector: 'app-stu-pay-stat',
  templateUrl: './stu-pay-stat.component.html',
  styleUrls: ['./stu-pay-stat.component.less']
})
export class StuPayStatComponent implements OnInit {

  schools: any[];
  contentHeader: any[];
  constructor(
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.schools = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生缴费统计', icon: 'fa-th-li'}
    ];
    this.fetchSchools();
  }

  fetchSchools(): void {
    this.schoolService.fetchSchoolList().then( schools => this.schools = schools );
  }

}
