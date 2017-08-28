import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {SchoolService} from '../../common/school.service';
import {PersonnelCashierComponent} from '../personnel-cashier.component';
import {PersonalCashierService} from '../personal-cashier.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.less']
})
export class FeesComponent implements OnInit {

  contentHeader: Sidebar[];
  schools: any[];
  students: any[];
  curSchool: any;
  constructor(
    private schoolService: SchoolService,
    private cashierService: PersonalCashierService,
  ) { }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '缴费管理页', icon: 'fa-money'}
    ];
    this.schools = [];
    this.curSchool = {name: '', id: ''};

    this.fetchSchools().then( schools => {
      if ( schools.length ) {
        (this.curSchool = schools[0]);
        this.curSchool.current = true;
        this.fetchStuBySchoolId(this.curSchool.id);
      }
    } );
  }

  fetchSchools(): Promise<any>{
    return this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
      return schools;
    } );
  }

  setCurSchool(curSchool){
    this.curSchool.current = false;
    this.curSchool = curSchool;
    this.curSchool.current = true;
    this.fetchStuBySchoolId( this.curSchool.id );
  }

  fetchStuBySchoolId(schoolId: string): void {
    this.cashierService.fetchStuBySchoolId(schoolId).then( students => this.students = students );
  }
}
