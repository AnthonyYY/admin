import { Component, OnInit } from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {

  students: Array<Student>;
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.students = [];
    this.studentService.fetchStudents().then( students => {
      console.log(this.students);
      this.students = students;
    } );
  }


  removeStudent(id: string): void {}

}
