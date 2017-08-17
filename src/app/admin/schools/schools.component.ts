import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';
import {School} from '../../common/school';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.less']
})
export class SchoolsComponent implements OnInit {

  contentHeader: Sidebar[];
  schools: School[];
  curSchool: {name: string, remark: string, id: ''};
  constructor(
    private schoolService: SchoolService,
    private adminService: AdminService
  ) {
    this.updateSchoolInfo = this.updateSchoolInfo.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '校区列表页', icon: 'fa-building'}
    ];
    this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
    } );
    this.curSchool = {remark: '', name: '', id: ''};
  }
  findSchoolById(id): School {
    return this.schools.find( school => {
      return id === school.id;
    } );
  }
  setCurSchool(school): void {
    this.curSchool = {...school};
  }
  updateSchoolInfo(): void {
    const body = {
      id: this.curSchool.id,
      name: this.curSchool.name,
      remark: this.curSchool.remark
    };
    this.adminService.updateSchoolInfo(body).then( (data) => {
      const curSchoolId = this.findSchoolById(this.curSchool.id);
    } );
  }
}
