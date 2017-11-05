import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-teacher-stu-score',
  templateUrl: './teacher-stu-score.component.html',
  styleUrls: ['./teacher-stu-score.component.less']
})
export class TeacherStuScoreComponent implements OnInit {

  contentHeader;
  curPage: number;
  filterCourseName: string;
  filterStuName: string;
  scores = [];
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.filterCourseName = '';
    this.filterStuName = '';
    this.contentHeader = [];
    this.curPage = 1;
    this.fetchStuScores();
  }
  handlePageChange(page): void {
    this.curPage = page;
  }
  fetchStuScores(): void {
    this.teacherService.fetchStuScores().then( scores => this.scores = scores);
  }
}
