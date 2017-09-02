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
  schoolCreatedFilterTime: {
    start: number;
    end: number;
  };
  schoolFilterName: string;
  constructor(
    private schoolService: SchoolService,
    private adminService: AdminService
  ) {
    this.updateSchoolInfo = this.updateSchoolInfo.bind(this);
    this.addSchool = this.addSchool.bind(this);
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
    this.schoolCreatedFilterTime = {
      start: new Date(new Date().getFullYear() + '-01-01').getTime(),
      end: Infinity
    };
    this.schoolFilterName = '';
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
      const curSchool = this.findSchoolById(this.curSchool.id);
      curSchool.name = this.curSchool.name;
      curSchool.remark = this.curSchool.remark;
    } );
  }

  addSchool(): void {
    this.adminService.addSchool(this.curSchool).then( data => {
      this.schools.unshift({
        ...this.curSchool,
        ...data
      });
      this.schools = [...this.schools];
    } );
  }

  /* handle school list filter */
  handleTimeRangeChange ($event): void {
    this.schoolCreatedFilterTime = {
      start: $event.start,
      end: $event.end,
    };
    this.schoolCreatedFilterTime = {...this.schoolCreatedFilterTime};
  }
}
