import { Component, OnInit } from '@angular/core';
import { PresidentService } from '../president.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less']
})
export class StudentsComponent implements OnInit {

  contentHeader: any[];
  name: string;
  students: any[];
  constructor(
    private presidentService: PresidentService
  ) { }

  ngOnInit() {
    this.name = '';
    this.students = [];
    this.contentHeader = [
      {name: '主页', icon: 'fa-dashboard'},
      {name: '学生信息列表', icon: 'fa-graduation-cap'}
    ];
    this.fetchStudents('');
  }

  fetchStudents(name): void {
    this.presidentService.fetchStudentsByName(name).then( students => {
      console.log(students);
      return this.students = students || [];
    } );
  }
}
