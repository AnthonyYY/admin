import { Component, OnInit } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {StmanagerService} from '../stmanager.service';

@Component({
  selector: 'app-ststudents',
  templateUrl: './ststudents.component.html',
  styleUrls: ['./ststudents.component.less']
})
export class StStudentsComponent implements OnInit {

  curPage: number;
  contentHeader: Sidebar[];
  studentFilterName: string;
  studentFilterPhone: string;
  students: Array<any>;

  studentBirthdayFilterTime: {
    start: number;
    end: number;
  };
  constructor(
    private stmanagerService: StmanagerService
  ) { }

  ngOnInit() {
    this.curPage = 1;
    this.students = [];
    this.studentFilterName = '';
    this.studentFilterPhone = '';
    this.studentBirthdayFilterTime = {
      start: new Date(new Date(1950, 0, 1).getFullYear() + '-01-01').getTime(),
      end: Infinity
    };

    this.fetchStudents();
  }

  fetchStudents(): void {
    this.stmanagerService.fetchAllocatedStudents().then( students => {
      this.students = students;
    } );
  }

  handleBirthdayRangeChange($event): void {
    this.studentBirthdayFilterTime = {
      start: $event.start,
      end: $event.end,
    };
  }

  handlePageChange($event) {
    this.curPage = $event;
  }
}
