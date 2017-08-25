import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../common/school.service';
import {TeacherDirectorService} from '../teacher-director.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.less']
})
export class GradeComponent implements OnInit {

  contentHeader: any[];
  grades: any[];
  filterGradeName: string;
  curGrade: { name: string, remark: string, price: number | '', id?:string};
  constructor(
    private schoolService: SchoolService,
    private teacherDirectorService: TeacherDirectorService
  ) {
    this.createGrade = this.createGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  ngOnInit() {
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '教学班组管理页', icon: 'fa-users'}
    ];
    this.filterGradeName = '';
    this.setCurGrade();
    this.fetchGrades();
  }

  setCurGrade(grade?: { name: string, remark: string, price: number | '' ,id?:string}): void {
    this.curGrade = {...grade} ||{ name: '', remark: '', price: '' };
  }

  fetchGrades(): void {
    this.schoolService.fetchGrades().then( grades => {
      this.grades = grades;
    } )
  }

  createGrade(): void {
    this.teacherDirectorService.createGrade(this.curGrade).then( id => {
      this.curGrade.id = id;
      this.grades.unshift(this.curGrade);
    } )
  }

  updateGrade(): void {
    this.teacherDirectorService.updateGrade( this.curGrade ).then( success => {
      const curGrade = this.findGradeById(this.curGrade.id);
      const curGradeIndex = this.grades.indexOf(curGrade);
      this.grades[curGradeIndex] = {...this.curGrade};
    } )
  }

  deleteGrade(): void {
    this.teacherDirectorService.deleteGrade(this.curGrade.id).then( success => {
      const curGrade = this.findGradeById(this.curGrade.id);
      const curGradeIndex = this.grades.indexOf(curGrade);
      this.grades.splice(curGradeIndex, 1);
    } );
  }

  findGradeById(id: string): object {
    return this.grades.find( grade => id === grade.id );
  }
}
