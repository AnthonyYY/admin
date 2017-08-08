import { Component, OnInit } from '@angular/core';
import {SyllabusService} from './syllabus.service';
import {Syllabus} from '../models/syllabus';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.less']
})
export class SyllabusComponent implements OnInit {

  syllabusTypes: object;
  syllabuses: Array<Syllabus>;
  constructor(
    private syllabusService: SyllabusService
  ) { }

  ngOnInit() {
    this.syllabuses = [];
    this.syllabusTypes = {
      ONETOONE: '一对一课程',
      BOUTIQUEGROUP: '精品小组',
      NORMALGROUP: '常规班'
    };
    this.syllabusService.fetchSyllabusList()
      .then( data => {
        this.syllabuses = data.data;
        console.log(this.syllabuses);
      } );
  }
}
