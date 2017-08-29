import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../../common/school.service';

@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.less']
})
export class SchoolTableComponent implements OnInit {

  schools: any[];
  curSchool: any;
  constructor(
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.schools = [];
    this.curSchool = {name: '', id: ''};

    this.fetchSchools().then( schools => {
      if ( schools.length ) {
        (this.curSchool = schools[0]);
        this.curSchool.current = true;
      }
    } );
  }

  fetchSchools(): Promise<any> {
    return this.schoolService.fetchSchoolList().then( schools => {
      this.schools = schools;
      return schools;
    } );
  }

  setCurSchool(curSchool) {
    this.curSchool.current = false;
    this.curSchool = curSchool;
    this.curSchool.current = true;
  }
}
