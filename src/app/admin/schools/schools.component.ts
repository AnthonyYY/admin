import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';
import {School} from '../../common/school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.less']
})
export class SchoolsComponent implements OnInit {

  contentHeader: Sidebar[];
  schools: School[];
  curSchool: {name: string, remark: string};
  constructor(
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '校区列表页', icon: 'fa-building'}
    ];
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
    } );
    this.curSchool = {remark: '', name: ''};
  }
  setCurSchool(school): void {
    this.curSchool = {...school};
  }
}
